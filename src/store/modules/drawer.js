import {DRAWER} from '../types';

const state = {
    drawer: true,
};

const getters = {
    drawer: state => state.drawer,
};

const actions = {
    async drawer({ commit }, payload) {
        commit(DRAWER, payload);
    },
};

const mutations = {
    [DRAWER](state, payload) {
        state.drawer = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
