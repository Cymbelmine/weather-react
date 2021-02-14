import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./WeatherFramework.css"

export default function Weather() {
  let weatherData = {
    City: "Berlin",
    Date: "Thursday 20:05",
    Description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    Humidity: 60,
    Wind: 10,
    Temperature: 20
  };
  return (
    <div className="Weather">
      <div className="Weather-App">
        <form className="mb-3">
          <div className="row">
            <div className="row-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="Form-Control"
                autoComplete="Off"
              />
            </div>
            <div className="row-3">
              <input
                type="submit"
                value="search"
                className="btn btn-light w-10"
              />
            </div>
          </div>
        </form>
        <div className="Overview">
          <h1 className="City"> {weatherData.City} </h1>
          <ul className="Descriptors3">
            <li>
              <span className="Date"> {weatherData.Date} </span>
            </li>
            <li className="Description"> {weatherData.Description} </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.Description}
                className="float-left"
              />
              <div className="float-left">
                <strong className="Temperature">
                  {" "}
                  {weatherData.Temperature}{" "}
                </strong>
                <span className="Units">
                  <a href="/" className="Active">
                    {" "}
                    ºC
                  </a>{" "}
                  |{" "}
                  <a href="/" className="Active">
                    ºF
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="Descriptors">
                Humidity:{" "}
                <span className="Humidity"> {weatherData.Humidity} </span>%
              </li>
              <li className="Descriptors2">
                Wind: <span className="Wind"> {weatherData.Wind} </span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row weather-forecast"></div>
      </div>
      <small>
        <a href="https://github.com/Cymbelmine/Project-weather-app/">
          Open-source code
        </a>{" "}
        by Mel Wieschalla
      </small>
    </div>
  );
}
