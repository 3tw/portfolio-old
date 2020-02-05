import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';


Vue.config.productionTip = false

// configuration for VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-157606098-1',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')