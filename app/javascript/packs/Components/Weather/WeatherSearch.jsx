import React, { useState, useEffect } from "react"

const WeatherSearch = props => {
  return (
    <div>
      <label htmlFor='weatherSearch'>Search</label>
      <input
        name='name'
        id='weatherSearch'
        placeholder='San Francisco, New York, etc'
        onChange={props.handleChange}
      ></input>
    </div>
  )
}

export default WeatherSearch
