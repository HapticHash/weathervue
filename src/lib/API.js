const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '2798b8830e086b53514ed3991c748103';
const LOCATION = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${LOCATION}`;

function getForecast() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default {
  getForecast,
};