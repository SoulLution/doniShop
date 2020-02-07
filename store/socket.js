const state = () => ({
  data: {},
  notice: {},
  writing: {},
  watching: {},
  status: {},
});

const getters = {
  DATA: state => {
    return {
      data: state.data,
    }
  },
  NOTICE: state => {
    return {
      notice: state.notice,
    }
  },
  WRITING: state => {
    return {
      writing: state.writing,
    }
  },
  WATCHING: state => {
    return {
      watching: state.watching,
    }
  },
  STATUS: state => {
    return {
      status: state.status,
    }
  }
};

const mutations = {
  SET_DATA: (state, payload) => {
    state.data = payload;
  },
  SET_NOTICE: (state, payload) => {
    state.notice = payload;
  },
  SET_WRITING: (state, payload) => {
    state.writing = payload;
  },
  SET_WATCHING: (state, payload) => {
    state.watching = payload;
  },
  SET_STATUS: (state, payload) => {
    state.status = payload;
  }
};

const actions = {
  GET_DATA: async (context, payload) => {
    if(payload.name === 'chat')
      context.commit('SET_DATA', {data: payload.data, type: payload.type});
    else if(payload.type === 1)
      context.commit('SET_NOTICE', payload.data);
  },
  GET_NOTICE: async (context, payload) => {
      context.commit('SET_NOTICE', payload.data);
  },  
  GET_WRITING: async (context, payload) => {
    if(payload.name === 'chat')
      context.commit('SET_WRITING', payload.data);
  },  
  GET_WATCHING: async (context, payload) => {
    if(payload.name === 'chat')
      context.commit('SET_WATCHING', payload.data);
  },  
  GET_STATUS: async (context, payload) => {
    if(payload.name === 'chat')
      context.commit('SET_STATUS', payload.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};