import React from "react"

const WeatherSearch = () => {
  return (
    <div>
      <label for='weatherSearch'>Search</label>
      <input
        onChange={}
        name='name'
        id='weatherSearch'
        placeholder='San Francisco, New York, etc'
      ></input>
    </div>
  )
}

export default WeatherSearch
