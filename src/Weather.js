import React, { useState } from "react";
import axios from 'axios';


export default function Weather() {
const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function inputText(event) {
    event.preventDefault();
    let units = `metric`;
    let apiKey = `162a820f7b475c266249f47d9d4b281d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  function inputCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Weather">
      <form onSubmit={inputText}>
        <input type="Search" placeholder=" type city..." onChange={inputCity} />
        <input className="button" type="submit" value="Search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="Weather2">
        {form}
        <ul>
          <li>City: {city} </li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity} %</li>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
