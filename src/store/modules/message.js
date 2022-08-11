const state = {
  connected: false,
  msgs: ['1', '2'],
  clickId: null
}

const mutations = {
  SET_MSGS: (state, msgs) => {
    state.msgs = msgs
  },
  ADD_MSG: (state, msg) => {
    state.msgs.push(msg)
  },
  SET_CLICK_ID: (state, clickId) => {
    state.clickId = clickId
  },
  SET_CONNECTED: (state, connected) => {
    state.connected = connected
  }
}

const actions = {
  addMessage({ commit }, message) {
    commit('ADD_MSG', message)
  },
  setConnected({ commit }, connected) {
    commit('SET_CONNECTED', connected)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
