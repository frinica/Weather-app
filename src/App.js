import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import useGeoLocation from "./Location/Location";
import CurrentDay from "./CurrentDay/CurrentDay";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async () => {
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
  }, [lat, lng]);

  return (
    <div className="App">
      {weatherData && <CurrentDay weatherData={weatherData} />}
    </div>
  );
};

export default App;
