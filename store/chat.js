const state = () => ({
  id: {},
});

const getters = {
  ID: state => {
    return {
      id: state.id,
    }
  },
};

const mutations = {
  SET_ID: (state, payload) => {
    state.id = payload;
  },
};

import axios from 'axios';
axios.defaults.baseURL = 'https://dev.investo24.ru/api/';

const actions = {
  GET_ID: async (context, payload) => {
    if(!payload) context.commit('SET_ID', {data: [], id: 0});
    else
      if(!payload.id)

      axios.post('/api', `method=START-CHAT&user_id=${payload}`)
    .then(res => {
      context.commit('SET_ID', {data: [], id: res.data.room_id});
    })
    .catch(err => console.error(err))
  else
    axios.post('/api', `method=GET-MESSAGES&room_id=${payload.id}`)
    .then(res => {
      context.commit('SET_ID', {data: res.data.messages ? res.data.messages : [], id: payload.id});
    })
    .catch(err => {

    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};