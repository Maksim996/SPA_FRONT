import Vue from 'vue';
import * as rules from 'vee-validate/dist/rules';
import {extend, localize, VeeValidate, ValidationProvider, ValidationObserver } from 'vee-validate';
import PhoneNumber from 'awesome-phonenumber'
import vee_ru from '@/lang/ru';
import vee_ua from '@/lang/ua';
import  GlobalMixin  from "@/mixins/GlobalMixin";

const ru = vee_ru['veeValidate'],
      ua = vee_ua['veeValidate'];

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize({
  ru, ua,
});

localize(process.env.VUE_APP_LOCALE);

// Custom rules validetion
extend('phone', {
  validate (value) {
    return new Promise(resolve => {
      let phone = new PhoneNumber(value);
      resolve({ valid: phone.isValid() })
    });
  }
});

extend('maskLength', {
  params: ['length'],
  validate: (value, {length}) => {
    const passport = GlobalMixin.methods.GlobalGetSymbols(value);
    return  passport.length >= Number(length) ? true : false;
  },
});

