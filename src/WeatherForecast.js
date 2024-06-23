import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let apiKey = "b9ba0314a93083136d968577c718e31d";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

function handleResponse(response) {
console.log(response.data);
}

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thur</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="weatherForecast-temperatures">
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

