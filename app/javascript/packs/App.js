import React from "react"
import "./App.module.css"
import axios from "axios"

import WeatherContainer from "./Components/Weather/WeatherContainer"

const csrfToken = document.querySelector("meta[name=csrf-token]").content
axios.defaults.headers.common["X-CSRF-Token"] = csrfToken

const App = () => {
  return (
    <div>
      <WeatherContainer />
    </div>
  )
}

export default App
