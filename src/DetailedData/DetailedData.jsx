import React from "react";
import "./DetailedData.css";
import "../bootstrap-icons.css";

const DetailedData = ({ weatherData, unit }) => {
  return (
    <div className="container">
      <div className="dataHeading">
        <h2>Details</h2>
      </div>

      <table>
        <tr>
          <td>
            <i className="bi bi-thermometer-high" />
            {""} Max
          </td>
          <td>
            {Math.round(weatherData[0].main.temp_max)}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-thermometer" />
            {""} Min
          </td>
          <td>
            {Math.round(weatherData[0].main.temp_min)}{" "}
            {unit === "metric" ? "°C" : "°F"}
          </td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-droplet" />
            {""} Humidity
          </td>
          <td>{weatherData[0].main.humidity} %</td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-wind" />
            {""} Wind speed
          </td>
          <td>
            {weatherData[0].wind.speed} {unit === "metric" ? "m/s" : "mph"}
          </td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-sunrise" />
            {""} Sunrise
          </td>
          <td>
            {new Date(weatherData[0].sys.sunrise * 1000).toLocaleTimeString(
              "se-SE",
              { timeStyle: "short" }
            )}
          </td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-sunset" />
            {""} Sunset
          </td>
          <td>
            {new Date(weatherData[0].sys.sunset * 1000).toLocaleTimeString(
              "se-SE",
              { timeStyle: "short" }
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default DetailedData;
