import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";
import axios from 'axios';

Vue.config.productionTip = false

// config. for axios
Vue.prototype.$http = axios

// config. for VueAnalytics
Vue.use(VueGtag, {
	config: { id: "UA-157606098-1" }
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')