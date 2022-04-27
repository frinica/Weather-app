import React from "react";
import "./DailyForecast.css";
import "../bootstrap-icons.css";

const DailyForecast = ({ daysData, unit }) => {
  return (
    <div className="dailyForecast">
      <div className="dataHeading">
        <h2>Daily forecast</h2>
      </div>
      <div className="wrapper">
        {daysData.map((data) =>
          data.daily.map((day) => {
            return (
              <div className="daysContainer">
                <div className="timeStamp">
                  {new Date(day.dt * 1000).toLocaleDateString("se-SE", {
                    day: "numeric",
                    month: "short",
                  })}
                </div>
                <div className="temperatureMax">
                  {Math.round(day.temp.max)}°
                </div>
                <div className="temperatureMax">
                  {Math.round(day.temp.min)}°
                </div>
                <div className="weatherIcon">
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt={day.weather[0].main}
                  />
                </div>
                <div className="rain">
                  <i className="bi bi-cloud-rain detail-icon" />
                  {day.rain ? <span>{day.rain}</span> : <span>0</span>}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default DailyForecast;
