import React from "react";
import "./DetailedData.css";
import "../bootstrap-icons.css";

const DetailedData = ({ weatherData }) => {
  return (
    <div className="detailedData">
      <div className="temperature">
        <p>{weatherData[0].main.temp_max}</p>
        <p>{weatherData[0].main.temp_min}</p>
      </div>
      <div className="weather">
        <p>{weatherData[0].main.humidity}%</p>
        <p>{weatherData[0].wind.speed} m/s</p>
      </div>
      <div className="sunState">
        <p>
          Sunrise: {new Date(weatherData[0].sys.sunrise).toLocaleTimeString()}
        </p>
        <p>
          Sunset: {new Date(weatherData[0].sys.sunset).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};
export default DetailedData;
