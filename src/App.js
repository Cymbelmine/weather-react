import React from "react";
import Weather from "./Weather";
import WeatherFramework from "./WeatherFramework";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="container">
       <footer>
         This project was created by <a href="https://stepbystep.hashnode.dev/" target="_blank">Mel Wieschalla</a> and is 
         <a href="https://github.com/Cymbelmine/weather-react" target="_blank"> open-sourced on GitHub</a>
       </footer>
      <Weather city="Berlin"/>
      <WeatherFramework />
    </div>
    </div>
  );
}

