import axios from 'axios';
import { openWeatherMapKey } from './keys_dev';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = openWeatherMapKey;

const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
};

export default fetchWeather;
