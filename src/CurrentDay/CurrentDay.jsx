import React from "react";
import "./CurrentDay.css";
import "../bootstrap-icons.css";

const CurrentDay = ({ weatherData, unit }) => {
  return (
    <div className="currentDay">
      <div className="heading">
        <h1>{weatherData[0].name}</h1>
      </div>
      <div className="summary">
        <div>
          <h2>
            {weatherData[0].main.temp} {unit === "metric" ? "°C" : "°F"}
          </h2>
          <p>
            Feels like: {weatherData[0].main.feels_like}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </p>
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
