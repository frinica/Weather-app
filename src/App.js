import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import useGeoLocation from "./Location/Location";

const API_KEY = "26fd463ba5c2d5d4f5149b3ccb333f48";

const App = () => {
  const location = useGeoLocation();
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async () => {
    const lat = location.coordinates.lat;
    const lng = location.coordinates.lng;
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
      const res = await axios.get(API_URL);
      setWeatherData([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  console.log(weatherData);

  return <div className="App"></div>;
};

export default App;
