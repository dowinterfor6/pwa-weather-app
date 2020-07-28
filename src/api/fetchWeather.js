import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// TODO: Protect key later
const API_KEY = '625f0eccdd120e446a1e548737229cde';

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
