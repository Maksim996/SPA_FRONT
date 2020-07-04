import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@/plugins/veevalidate';
import i18n from "./plugins/i18n";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  axios,
  render: h => h(App)
}).$mount('#app');
