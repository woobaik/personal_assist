import React from "react"
import classes from "./WeatherDetail.module.css"
import axios from "axios"

export default function WeatherDetail(props) {
  return (
    <div>
      <h4 className={classes.cityName}>{props.city[0].name}</h4>
      <div className={classes.weatherIcon}>{props.city[0].country}</div>
      <div>Current Temp</div>
      <div>
        <span> Low </span> <span>High</span>
      </div>
    </div>
  )
}
