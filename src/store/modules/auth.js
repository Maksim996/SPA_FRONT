import axios from 'axios';
import api from '@/api';

import {LOGIN, CURRENT_USER, LOGOUT} from '../types';

const state = {
  token: null,
  isLogged: false,
  currentUser: null,
};

const getters = {
  isLogged: state => state.isLogged,
  currentUser: state => state.currentUser,
};

const actions = {
  async login({dispatch, commit}, payload) {
    const json = await api.post('/api/login', payload);
    if (json.status === 200) {
      commit(LOGIN, json.data);
      await dispatch('getUserCurrent');
      return json;
    }

    throw json;
  },
  async checkLogged({dispatch, commit}) {
    const token = localStorage.getItem('token');

    if (token !== null && token !== 'null') {
      commit(LOGIN, {token});
      // await dispatch('getUserCurrent');
    }
  },
  async getUserCurrent({commit}) {
    const json = await api.get('/api/user');

    if (json.status === 200) {
      commit(CURRENT_USER, json.data.data);
      return json;
    }

    throw json;
  },
  async logout({dispatch, commit}) {
    const json = await api.get('api/logout');

    if (json.status === 200) {
      commit(CURRENT_USER, null);
      commit(LOGOUT);
      await dispatch('checkLogged')
    }
  },
};

const mutations = {
  [LOGIN](state, payload) {
    const {token} = payload;
    if (token !== null && token !== 'null' && token !== undefined) {
      localStorage.setItem('token', token);
      api.setHeader('Authorization', 'Bearer ' + token);
      state.isLogged = true;
      state.token = token;
    }
  },
  [CURRENT_USER](state, payload) {
    state.currentUser = payload;
  },
  [LOGOUT](state) {
    localStorage.removeItem('token');
    api.setHeader('Authorization', '');

    state.isLogged = false;
    state.token = null;
    state.currentUser = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
