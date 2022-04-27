import React from "react";
import "./DetailedData.css";
import "../bootstrap-icons.css";

const DetailedData = ({ weatherData, unit }) => {
  return (
    <div className="container">
      <div className="dataHeading">
        <h2>Details</h2>
      </div>
      <div className="details">
        <div className="weather">
          <div className="weatherContainer humidity">
            <i className="bi bi-droplet" />
            <span className="humidity-text">
              {weatherData[0].main.humidity} %
            </span>
          </div>
          <div className="weatherContainer wind">
            <i className="bi bi-wind" />
            <span>
              {weatherData[0].wind.speed} {unit === "metric" ? "m/s" : "mph"}
            </span>
          </div>
        </div>
        <div className="temperature">
          <div className="weatherContainer max-temp">
            <i className="bi bi-thermometer-high" />
            <span>
              {Math.round(weatherData[0].main.temp_max)}{" "}
              {unit === "metric" ? "°C" : "°F"}
            </span>
          </div>
          <div className="weatherContainer min-temp">
            <i className="bi bi-thermometer" />
            <span>
              {Math.round(weatherData[0].main.temp_min)}{" "}
              {unit === "metric" ? "°C" : "°F"}
            </span>
          </div>
        </div>

        <div className="sunState">
          <div className="weatherContainer sunrise">
            <i className="bi bi-sunrise" />
            <span>
              {new Date(weatherData[0].sys.sunrise * 1000).toLocaleTimeString(
                "se-SE",
                { timeStyle: "short" }
              )}
            </span>
          </div>
          <div className="weatherContainer sunset">
            <i className="bi bi-sunset" />
            <span>
              {new Date(weatherData[0].sys.sunset * 1000).toLocaleTimeString(
                "se-SE",
                { timeStyle: "short" }
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedData;
