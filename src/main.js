import Vue from 'vue';
import VueSkycons from 'vue-skycons';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueSkycons);
Vue.use(VueSkycons, { color: 'orangered' });

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
