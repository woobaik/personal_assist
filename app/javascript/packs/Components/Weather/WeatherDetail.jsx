import React, { useEffect } from "react"
import classes from "./WeatherDetail.module.css"
import axios from "axios"

export default function WeatherDetail(props) {
  useEffect(() => {
    axios({
      method: "get",
      url: "api.openweathermap.org/data/2.5/weather?q=London"
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    return () => {}
  }, [])

  return (
    <div>
      <h4 className={classes.cityName}>
        {props.city[0].name} {props.city[0].country}
      </h4>
      <div className={classes.weatherIcon}></div>
      <div>Current Temp</div>
      <div>
        <span> Low </span> <span>High</span>
      </div>
    </div>
  )
}
