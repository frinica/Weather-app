import React from "react";
import "./MarsForecast.css";

const MarsForecast = ({ marsData }) => {
  return (
    <div className="container marsContainer">
      <div className="dataHeading">
        <h2>Forecast on Mars</h2>
      </div>

      <table>
        <tr>
          <td>Date on Mars:</td>
          <td>
            {new Date(marsData.terrestrial_date).toLocaleDateString("en-EN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-thermometer-high" /> Max
          </td>
          <td>{Math.round(marsData.max_temp)} °C</td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-thermometer" /> Min
          </td>
          <td>{Math.round(marsData.min_temp)} °C</td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-sunrise" /> Sunrise
          </td>
          <td>{marsData.sunrise}</td>
        </tr>
        <tr>
          <td>
            <i className="bi bi-sunset" /> Sunset
          </td>
          <td>{marsData.sunset}</td>
        </tr>
      </table>

      {/*  <div className="smallHeading">
        <h3>
          Date on Mars: <br />
          {new Date(marsData.terrestrial_date).toLocaleDateString("en-EN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </h3>
      </div>

      <div className="details">
        <div className="temperature">
          <div className="weatherContainer max-temp">
            <i className="bi bi-thermometer-high" />
            <span>{Math.round(marsData.max_temp)} °C</span>
          </div>
          <div className="weatherContainer min-temp">
            <i className="bi bi-thermometer" />
            <span>{Math.round(marsData.min_temp)} °C</span>
          </div>
        </div>

        <div className="sunState">
          <div className="weatherContainer sunrise">
            <i className="bi bi-sunrise" />
            <span>{marsData.sunrise}</span>
          </div>
          <div className="weatherContainer sunset">
            <i className="bi bi-sunset" />
            <span>{marsData.sunset}</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default MarsForecast;
