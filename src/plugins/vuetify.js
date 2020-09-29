import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import ThemeColors from "./themeColors.js"
import i18n from './i18n.js'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      t: (key, ...params) => i18n.t(key, params),
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
  ThemeColors,
});
