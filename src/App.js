import "./App.css";
import { useState, useEffect } from "react";

import { fetchDaysData, fetchHourlyData } from "./API/api";
import useGeoLocation from "./Location/GeoLocation";
import CurrentDay from "./CurrentDay/CurrentDay";
import DetailedData from "./DetailedData/DetailedData";
import HourlyData from "./HourlyData/HourlyData";
import DailyForecast from "./DailyForecast/DailyForecast";
import { fetchWeatherData } from "./API/api";

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [daysData, setDaysData] = useState();
  const [unit, setUnit] = useState("metric");
  const [searchTerm, setSearchTerm] = useState("");

  const location = useGeoLocation(searchTerm);
  let lat = location.coordinates.lat;
  let lng = location.coordinates.lng;

  const getWeatherData = async () => {
    try {
      const res = await fetchWeatherData({ lat, lng, unit });
      setWeatherData([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const getHourlyData = async () => {
    try {
      const res = await fetchHourlyData({ lat, lng, unit });
      setHourlyData(res.data);
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

  const changeLocation = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(lat, lng);

  if (weatherData && hourlyData && daysData) {
    let now = new Date();
    let sunset = new Date(weatherData[0].sys.sunset);

    return (
      <div className={now > sunset ? "App night" : "App day"}>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search location"
              onChange={changeLocation}
            />
          </form>
          <button onClick={changeUnit} value="metric">
            °C
          </button>
          <button onClick={changeUnit} value="imperial">
            °F
          </button>
        </div>
        {weatherData && <CurrentDay weatherData={weatherData} unit={unit} />}
        {weatherData && <DetailedData weatherData={weatherData} unit={unit} />}
        {hourlyData && <HourlyData hourlyData={hourlyData} unit={unit} />}
        {daysData && <DailyForecast daysData={daysData} unit={unit} />}
      </div>
    );
  }
};

export default App;
