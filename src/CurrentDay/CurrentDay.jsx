import React from "react";
import "./CurrentDay.css";
import "../bootstrap-icons.css";
{
  /* <h1>{data.name}</h1>
            <p>{data.weather[0].main}</p>
            <p>Temp: {data.main.temp}</p>
            <p>Feels like: {data.main.feels_like}</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed} m/s</p>
            <p>Sunrise: {new Date(data.sys.sunrise).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(data.sys.sunset).toLocaleTimeString()}</p> */
}

const CurrentDay = ({ weatherData }) => {
  return (
    <div className="currentDay">
      <div className="heading">
        <h1>{weatherData[0].name}</h1>
      </div>
      <div className="summary">
        <div>
          <h2>{weatherData[0].main.temp}</h2>
          <p>Feels like: {weatherData[0].main.feels_like}</p>
          <p>{weatherData[0].weather[0].main}</p>
        </div>
        <div className="icon">
          <i className="bi bi-sun"></i>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
