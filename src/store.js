import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async checkToken({ commit }) {
            const token = localStorage.getItem('token');
            return axios
                .get('http://localhost:8888/checktoken', {
                    headers: { token }
                })
                .then(({ data }) => commit('setUser', data));
        }
    },
    getters: {
        isAuth(state) {
            return state.user !== null;
        }
    }
});
