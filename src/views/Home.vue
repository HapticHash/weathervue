<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2 ">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter a location" aria-label="Enter Location" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-success" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>

      <div class="col-8 offset-2 text-center" v-if="forecast">
       <div class="card mb-3">
        <div class="row header"> 
          <div class="col-3"> <font-awesome-icon icon="cloud" /> {{forecast.currently.cloudCover*100}}% </div>
          <div class="col-3"> <font-awesome-icon icon="wind" /> {{forecast.currently.windSpeed}} km/h </div>
          <div class="col-3"> <font-awesome-icon icon="eye" /> {{forecast.currently.visibility}} km </div>
          <div class="col-3"> <font-awesome-icon icon="tint" /> {{forecast.currently.precipProbability*100}}% </div>
        </div>
        <div class="card-body">
          <p class="card-text temp">{{ Math.round((forecast.currently.temperature - 32) * 5 / 9) }}°C</p>
          <p class="card-text"> <font-awesome-icon icon="map-marker-alt" /> {{address}}</p>
          <p class="card-text"> <font-awesome-icon icon="info-circle" /> {{forecast.currently.summary}} </p>
          <h4 class="card-title">
            <skycon :condition="forecast.currently.icon" width="100" height="100" />
          </h4>
        </div>
      </div>
      </div>
    </div>
    <pre>{{forecast}}</pre>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || null,
      forecast: {},
      address: '',
    };
  },
  mounted() {
    this.loadWeather(localStorage.lat || '37.8267', localStorage.lng || '-122.4233');
  },
  methods: {
    loadWeather(lat, lng) {
      localStorage.lat = lat;
      localStorage.lng = lng;
      API.getAddress(lat, lng).then((result) => {
        this.address = [result.name, result.street].join(' ');
        localStorage.address = address;
      });
      API.getForecast(lat, lng).then((result) => {
        this.forecast = result;
      });
    },
    updateLocation() {
      localStorage.location = this.location;
      API.getCoordinates(this.location).then((result) => {
        this.loadWeather(result.latitude, result.longitude);
      });
    },
  },
};
</script>

<style>
*{
  font-family: 'Montserrat', serif;
  font-weight: 500;
}
.header {
  margin: 1em 0;
}
.card-text {
  font-size: 1.1em;
  font-family: 'Montserrat', serif;
}
.temp {
  font-size: 6em;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}
</style>