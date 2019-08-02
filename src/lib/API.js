const API_URL = 'https://api.darksky.net/forecast/2798b8830e086b53514ed3991c748103/37.8267,-122.4233';

function getForecast() {
  fetch(API_URL)
    .then(response => response.json())
    .then((result) => {
      console.log(result);
    });
}

export default {
  getForecast,
};