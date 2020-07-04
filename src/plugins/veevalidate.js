import Vue from 'vue';
import ru from 'vee-validate/dist/locale/ru.json';
import ua from 'vee-validate/dist/locale/uk.json';
import * as rules from 'vee-validate/dist/rules';
import {extend, localize, VeeValidate, ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize({
  ru,ua
});
localize(process.env.VUE_APP_LOCALE);

// Vue.use(VeeValidate, {
//     fieldsBagName: 'fieldsValidation',
//     locale: 'ru',
//     dictionary: {
//         ru: messages,
//     },
// });
