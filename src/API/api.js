import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const getHourlyData = async () => {
  const axios = require("axios").default;
  try {
    return await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${unit}`
    );
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve({ data: [] });
};

export default getHourlyData;
