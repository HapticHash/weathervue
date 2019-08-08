import Vue from 'vue';
import VueSkycons from 'vue-skycons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faWind, faTint, faMapMarkerAlt, faEye, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faCloud, faWind, faTint, faMapMarkerAlt, faEye, faInfoCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueSkycons);
Vue.use(VueSkycons, { color: 'orangered' });

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
