import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";


export default function Weather(props) {
  
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response){
  console.log(response.data.main);
  setWeatherData ({
    ready: true,
    city: response.data.name,
    date: new Date (response.data.dt * 1000),
    temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
  })
}
function search() {
  const apiKey = `162a820f7b475c266249f47d9d4b281d`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event) {
  event.preventDefault();
  search();
}
function handleCityChange(event) {
setCity(event.target.value);
}
if (weatherData.ready){
return(<div className="Weather">
  <form onSubmit={handleSubmit} >
    <div className="row">
      <div className="col-9">
    <input type="search" 
    placeholder="Type a city..."
    className="form-control"
    autoFocus="on"
    onChange={handleCityChange} />
    </div>
    <div className="col-3">
    <input type="submit" value="Search"
    className="btn btn-primary w-100"/>
    </div>
    </div>
  </form>
  <Weatherinfo data={weatherData} />
</div>)
} else {
  search();
  return "Loadiing...";
}
}
