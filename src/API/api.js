import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
/* const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`; */

export const fetchWeatherData = async ({ lat, lng, unit }) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`
  );
  return res;
};

/* const fetchHourlyData = async () => {
  try {
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`
    );
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve({ data: [] });
}; */
