import React from "react";
import "./HourlyData.css";

const HourlyData = ({ hourlyData, unit }) => {
  const hours = [hourlyData.list.slice(0, 5)];
  return (
    <div className="hourlyData">
      <div className="dataHeading">
        <h2>Hourly forecast</h2>
      </div>
      {hours.map((data, index) => {
        return (
          <div>
            <div className="timeStamp">
              {new Date(data[index].dt * 1000).toLocaleTimeString("se-SE")}
            </div>
            <div className="temperature">
              {Math.round(data[index].main.temp)}{" "}
              {unit === "metric" ? "°C" : "°F"}
            </div>
            <div className="weatherIcon">
              <img
                src={`http://openweathermap.org/img/wn/${data[index].weather[0].icon}.png`}
                alt={data[index].weather[0].main}
              />
            </div>
            <div className="weather">{data[index].weather[0].main}</div>
          </div>
        );
      })}
    </div>
  );
};
export default HourlyData;
