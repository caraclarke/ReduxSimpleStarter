import axios from 'axios';

const API_KEY = 'af576b432b4c3821aa126cd2eff1a9ad';
// es6 template strings - make sure to use backticks
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// call action creator to make ajax request

// define var, assign string and export var
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
