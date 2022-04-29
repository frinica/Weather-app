import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

// Current day forecast and details data
export const fetchWeatherData = async ({ lat, lng, unit }) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`
  );
  return res;
};

// 24 hour forecast data
export const fetchHourlyData = async ({ lat, lng, unit }) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`
  );
  return res;
};

// 5 days forecast data
export const fetchDaysData = async ({ lat, lng, unit }) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=${API_KEY}&units=${unit}`
  );
  return res;
};

// Searched location
export const fetchSearchData = async ({ searchTerm }) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&&appid=${API_KEY}`
  );
  return res;
};

export const fetchMarsData = async () => {
  const res = axios.get("https://api.maas2.apollorion.com");
  return res;
};
