const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '2798b8830e086b53514ed3991c748103';
const LOCATION = '37.8267,-122.4233';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;

// eslint-disable-next-line no-shadow
function getCoordinates(LOCATION) {
  return fetch(`${GEO_API_URL}${LOCATION}`)
    .then(response => response.json());
}

function getForecast(lat, lng) {
  return fetch(`${WEATHER_API_URL}${lat},${lng}`)
    .then(response => response.json());
}

export default {
  getForecast, getCoordinates,
};
