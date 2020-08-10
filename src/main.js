import Vue from 'vue'
import App from './App.vue'
import styles from '@/assets/css/style.css'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@/plugins/veevalidate';
import i18n from "./plugins/i18n";
import axios from "axios";
import GlobalMixin from "@/mixins/GlobalMixin";
import GlobalMixinMessages from "@/mixins/GlobalMixinMessages";
import vueMaskOptions from "@/plugins/vueMask";
import VueMask from "v-mask";
import '@/plugins/sweetalert2';
import '@/plugins/flashMessage';
import Consts from '@/plugins/getConst.js';

store.dispatch('auth/checkLogged');

Vue.use(VueMask,
   vueMaskOptions
);

Vue.mixin(GlobalMixin);
Vue.mixin(GlobalMixinMessages);
Vue.use(Consts);

Vue.config.productionTip = false;
new Vue({
  router,
  styles,
  store,
  vuetify,
  i18n,
  axios,
  render: h => h(App)
}).$mount('#app');
