import React from "react";
import "./CurrentDay.css";

const CurrentDay = ({ weatherData, unit }) => {
  return (
    <div className="container">
      <div className="heading">
        <h1>{weatherData[0].name}</h1>
      </div>
      <div className="summary">
        <div>
          <h2>
            {Math.round(weatherData[0].main.temp)}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </h2>
          <p>
            Feels like: {Math.round(weatherData[0].main.feels_like)}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </p>
          <p className="currentWeather">
            {weatherData[0].weather[0].description[0].toUpperCase() +
              weatherData[0].weather[0].description.slice(1)}
          </p>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}.png`}
            alt={weatherData[0].weather[0].main}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
