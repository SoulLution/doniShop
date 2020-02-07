const state = () => ({
  data: {},
});

const getters = {
  DATA: state => {
    return {
      data: state.data,
    }
  },
};

const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },
};

import axios from 'axios';
axios.defaults.baseURL = 'https://dev.investo24.ru/api/';

const actions = {
  GET_DATA: async (context, payload) => {
  	axios.post('/api', `method=GET-USER`)
  	.then( res => {
	  	context.commit('SET_DATA', res.data.user);
  	})
  	.catch( err => {if(err.response.status === 401) top.location = '/login'})
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};