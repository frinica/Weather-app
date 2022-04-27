import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import ApiData, { fetchDaysData, fetchHourlyData } from "./API/api";
import useGeoLocation from "./Location/Location";
import CurrentDay from "./CurrentDay/CurrentDay";
import DetailedData from "./DetailedData/DetailedData";
import HourlyData from "./HourlyData/HourlyData";
import DailyForecast from "./DailyForecast/DailyForecast";
import { fetchWeatherData } from "./API/api";

const App = () => {
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;
  const [weatherData, setWeatherData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [daysData, setDaysData] = useState();
  const [unit, setUnit] = useState("metric");

  const getHourlyData = async () => {
    try {
      const res = await fetchHourlyData({ lat, lng, unit });
      setHourlyData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getWeatherData = async () => {
    try {
      const res = await fetchWeatherData({ lat, lng, unit });
      setWeatherData([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const getDaysData = async () => {
    try {
      const res = await fetchDaysData({ lat, lng, unit });
      setDaysData([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (lat && lng) {
      getWeatherData({ lat, lng, unit });
      getHourlyData({ lat, lng, unit });
      getDaysData({ lat, lng, unit });
    }
  }, [lat, lng, unit]);

  const changeUnit = (e) => {
    e.preventDefault();
    setUnit(e.target.value);
  };

  if (weatherData && hourlyData && unit) {
    return (
      <div className="App">
        <button onClick={changeUnit} value="metric">
          °C
        </button>
        <button onClick={changeUnit} value="imperial">
          °F
        </button>
        {weatherData && <CurrentDay weatherData={weatherData} unit={unit} />}
        {weatherData && <DetailedData weatherData={weatherData} unit={unit} />}
        {hourlyData && <HourlyData hourlyData={hourlyData} unit={unit} />}
        {daysData && <DailyForecast daysData={daysData} unit={unit} />}
      </div>
    );
  }
};

export default App;
