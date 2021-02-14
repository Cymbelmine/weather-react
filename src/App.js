import React from "react";
import Weather from "./Weather";
import WeatherFramework from "./WeatherFramework";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather App</h1>
      </header>
      <Weather city="Berlin"/>
      <WeatherFramework />
    </div>
  );
}

export default App;
