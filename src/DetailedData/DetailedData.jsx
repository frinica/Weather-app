import React from "react";
import "./DetailedData.css";
import "../bootstrap-icons.css";

const DetailedData = ({ weatherData }) => {
  return (
    <div className="detailedData">
      <div className="dataHeading">
        <h2>Details</h2>
      </div>
      <div className="details">
        <div className="temperature">
          <div className="max-temp">
            <i class="bi bi-thermometer-high detail-icon" />
            <span>{weatherData[0].main.temp_max}</span>
          </div>
          <div className="min-temp">
            <i class="bi bi-thermometer detail-icon" />
            <span>{weatherData[0].main.temp_min}</span>
          </div>
        </div>
        <div className="weather">
          <div className="humidity">
            <i class="bi bi-water detail-icon" />
            <span>{weatherData[0].main.humidity}%</span>
          </div>
          <div className="wind">
            <i class="bi bi-wind detail-icon" />
            <span>{weatherData[0].wind.speed} m/s</span>
          </div>
        </div>
        <div className="sunState">
          <div className="sunrise">
            <i class="bi bi-sunrise detail-icon" />
            <span>
              {new Date(weatherData[0].sys.sunrise).toLocaleTimeString()}
            </span>
          </div>
          <div className="sunset">
            <i class="bi bi-sunset detail-icon" />
            <span>
              {new Date(weatherData[0].sys.sunset).toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedData;
