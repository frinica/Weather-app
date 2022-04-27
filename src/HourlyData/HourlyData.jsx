import React from "react";
import "./HourlyData.css";

const HourlyData = ({ hourlyData, unit }) => {
  const hours = hourlyData.list.slice(0, 8);
  return (
    <div className="container">
      <div className="dataHeading">
        <h2>24 hour forecast</h2>
      </div>
      <div className="wrapper">
        {hours.map((data) => {
          return (
            <div className="dataContainer">
              <div className="timeStamp">
                {new Date(data.dt * 1000).toLocaleTimeString("se-SE", {
                  timeStyle: "short",
                })}
              </div>
              <div className="temperature">
                {Math.round(data.main.temp)} {unit === "metric" ? "°C" : "°F"}
              </div>
              <div className="weatherIcon">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt={data.weather[0].main}
                />
              </div>
              <div className="weather">{data.weather[0].main}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HourlyData;
