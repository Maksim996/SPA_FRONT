import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from "@/plugins/themeColors";
const {userPreset} = vuetify;

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: userPreset.theme.themes.light.btnCC,
  cancelButtonColor: 'red',
};

Vue.use(VueSweetalert2, options);
