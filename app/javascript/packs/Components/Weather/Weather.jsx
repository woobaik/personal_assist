import React from "react"
import classes from "./Weather.module.css"

const Weather = () => {
  return (
    <div className={classes.WeatherContainer}>
      <h4 className={classes.cityName}>San Francisco</h4>
      <div className={classes.weatherIcon}>Weather Icon</div>
      <div>Current Temp</div>
      <div>
        <span> Low </span> <span>High</span>
      </div>
    </div>
  )
}

export default Weather
