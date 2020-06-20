import * as ApplicationSettings from "application-settings";

// initial state
const state = () => ({
  token: false
})

// getters
const getters = {}

// actions
const actions = {
  clearUser({ commit }) {
    commit('clearUser');
    ApplicationSettings.remove('token')
  },
  setUser({ commit }, token) {
    commit('setUser', token)
    ApplicationSettings.setString('token', token)
  },
  loadFromStorage(state) {
    const token = ApplicationSettings.getString('token')
    if (token) {
      state.token = token
    }
  }
}

// mutations
const mutations = {
  setUser(state, token) {
    state.token = token
  },
  clearUser(state) {
    state.token = null
  },
  loadFromStorage(state) {
    const token = ApplicationSettings.getString('token')
    commit('setUser', token)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
