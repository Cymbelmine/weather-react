import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";


export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
setForecast(response.data);
setLoaded(true);
}
if (loaded && props.city === forecast.city.name) {
    return (
        <div className="WeatherForecast row">
              {forecast.list.slice(0, 6).map(function(forecastItem)
            { return  <WeatherForecastPreview data={forecastItem} />;
            })}
        </div>
        );
} else {
const apiKey = `162a820f7b475c266249f47d9d4b281d`;
  let units = `metric`;
    let url =  `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${units}&appid=${apiKey}`;
axios.get(url).then(handleForecastResponse);
    return null;
}
}