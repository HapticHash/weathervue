<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-8 offset-2 text-center">
       <div class="card border-primary mb-3">
        <div class="card-header">Current Weather</div>
        <div class="card-body">
          <h4 class="card-title"> <skycon condition="rain" width="100" height="100" /> </h4>
          <p class="card-text">{{forecast.currently.summary}}</p>
          <p class="card-text">{{forecast.currently.temperature}} °F</p>
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
      forecast: {},
      icons: {
        'clear-day': 'clear-day',
        'clear-night': '', 
        rain: '', 
        snow: '', 
        sleet: '', 
        wind: '', 
        fog: '', 
        cloudy: '', 
        'partly-cloudy-day': '',  
        'partly-cloudy-night': 'partly-cloudy-night'
      },
    };
  },
  mounted() {
    API.getForecast().then((result) => {
      this.forecast = result;
    });
  },
};
</script>
