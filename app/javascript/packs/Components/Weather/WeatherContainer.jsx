import React, { useState, useEffect } from "react"
import classes from "./WeatherContainer.module.css"
import WeatherSearch from "./WeatherSearch"
import WeatherDetail from "./WeatherDetail"

import axios from "axios"

const Weather = () => {
  const [cityList, setCityList] = useState([])
  const [selectedCity, setSelectedCity] = useState([])
  const [showSelectedCity, setShowSelctedCity] = useState(true)

  const handleTermChange = e => {
    axios
      .post("http://localhost:3000/cities/search", {
        city: e.target.value
      })
      .then(response => {
        setCityList(response.data.cities)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(cityList)
  }

  const handleSelect = e => {
    const newCity = {
      name: e.target.attributes["data-name"].textContent,
      country: e.target.attributes["data-country"].textContent,
      city_id: e.target.attributes["data-id"].textContent
    }
    setSelectedCity([newCity])

    setCityList([])
  }

  useEffect(() => {
    console.log("selected City", selectedCity)
  }, [selectedCity])

  const cityListMapper = () => {
    return cityList.map(city => {
      return (
        <li
          key={city.city_id}
          data-name={city.name}
          data-country={city.country}
          data-id={city.city_id}
          onClick={handleSelect}
        >
          {city.name} {city.country}
        </li>
      )
    })
  }

  return (
    <div className={classes.WeatherContainer}>
      <WeatherSearch handleChange={handleTermChange} />
      {cityListMapper()}
      {selectedCity.length > 0 ? (
        <WeatherDetail city={selectedCity} />
      ) : (
        <div>PLEASE SELECT A CITY</div>
      )}
    </div>
  )
}

export default Weather
