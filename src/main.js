import Vue from 'vue';
import VueSkycons from 'vue-skycons';
import Darkmode from 'darkmode-js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faWind, faTint, faMapMarkerAlt, faEye, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faCloud, faWind, faTint, faMapMarkerAlt, faEye, faInfoCircle, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueSkycons);
Vue.use(VueSkycons, { color: 'orangered' });

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
