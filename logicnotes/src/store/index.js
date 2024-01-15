// src/store/index.js

import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
        user: {
            id: null,
            first_name: '',
            last_name:'',
            email: '',
        },
    }
  },
  mutations: {
    setUser(state, user) {
        console.log('Setting user:', user);
        state.user = { ...state.user, ...user };
    },
  },
  actions: {
    updateUser({ commit }, user) {
        commit('setUser', user);
    },
  },
  getters: {
    getUser: state => state.user,
  },
});
