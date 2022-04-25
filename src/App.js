import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import ApiData from "./API/api";
import useGeoLocation from "./Location/Location";
import CurrentDay from "./CurrentDay/CurrentDay";
import DetailedData from "./DetailedData/DetailedData";
import { fetchWeatherData } from "./API/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;
  const [weatherData, setWeatherData] = useState([{}]);
  const [unit, setUnit] = useState("metric");

  /* const getWeatherData = async () => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`;
      const res = await axios.get(API_URL);
      setWeatherData([res.data]);
    } catch (e) {
      console.log(e);
    }
  }; */

  const getWeatherData = async () => {
    try {
      const res = await fetchWeatherData({ lat, lng, unit });
      setWeatherData([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWeatherData({ lat, lng, unit });
  }, [lat, lng, unit]);

  console.log(weatherData);

  const changeUnit = (e) => {
    e.preventDefault();
    setUnit(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={changeUnit} value="metric">
        °C
      </button>
      <button onClick={changeUnit} value="imperial">
        °F
      </button>

      <CurrentDay weatherData={weatherData} unit={unit} />
      <DetailedData weatherData={weatherData} unit={unit} />
    </div>
  );
};

export default App;
