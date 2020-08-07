import Vue from "vue";
import FlashMessage from '@smartweb/vue-flash-message';

const options = {
  time: 5000,
  icon: true,
  strategy: 'multiple'
};
Vue.use(FlashMessage, options );
export default new FlashMessage();
