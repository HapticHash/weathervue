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
       <div class="card border-primary mb-3">
        <div class="card-header"> {{address}} </div>
        <div class="card-body">
          <h4 class="card-title">
            <skycon :condition="forecast.currently.icon" width="100" height="100" />
          </h4>
          <p class="card-text">{{forecast.currently.summary}}</p>
          <p class="card-text">{{forecast.currently.temperature}} °F</p>
        </div>
      </div>
      </div>
    </div>
    <!-- <pre>{{forecast}}</pre> -->
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
