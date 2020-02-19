import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';
import axios from 'axios';

Vue.config.productionTip = false

// config. for axios
Vue.prototype.$http = axios

// config. for VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-157606098-1'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')