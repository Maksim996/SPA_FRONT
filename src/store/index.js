import Vue from 'vue'
import Vuex from 'vuex'
import drawer from '@/store/modules/drawer'
import auth from '@/store/modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    drawer,
    auth
  }
})
