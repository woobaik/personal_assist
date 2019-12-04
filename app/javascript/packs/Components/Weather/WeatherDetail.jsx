import React, { useState, useEffect } from "react"
import classes from "./WeatherDetail.module.css"
import axios from "axios"

export default function WeatherDetail(props) {
  const [weatherInfo, setWeatherInfo] = useState({})

  useEffect(() => {
    axios
      .post("http://localhost:3000/cities/weather", {
        city_id: props.city[0].city_id
      })
      .then(response => {
        console.log("WHOLE_DATA", response.data)
        console.log("WEATHER_ONE_LEVEL", response.data.weather)
        console.log("WEATHER_Two_Loevel main", response.data.weather.main)
        console.log(
          "WEATHER_Two_Loevel weather_datail",
          response.data.weather.weather_detail[0]
        )
        setWeatherInfo(response.data.weather)
      })
      .then(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    console.log("weatherINFO", weatherInfo)
  })

  const weatherImage = () => {
    if (weatherInfo.weather_detail) {
    }
  }

  const temperature = () => {
    return (
      <div>
        <div> Min : {weatherInfo.main.temp_min} </div>
        <div> Max : {weatherInfo.main.temp_max}</div>
        <div> Humidity : {weatherInfo.main.humidity}%</div>
      </div>
    )
  }

  return (
    <div>
      {weatherInfo.main && weatherInfo.weather_detail ? (
        <div>
          <h4 className={classes.cityName}>
            {props.city[0].name} {props.city[0].country}
          </h4>
          <div className={classes.weatherIcon}></div>
          <div>Current Temp</div>
          <div>{temperature()}</div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}
