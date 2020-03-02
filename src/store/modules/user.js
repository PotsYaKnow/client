const state = {
  isUserLoggedIn: false
}

const mutations = {
  login(state, isLoggedIn) {
    state.isUserLoggedIn = true
  },
  logout(state) {
    state.isUserLoggedIn = false
  }
}


const actions = {
  login({ commit, state }) {
    commit('login')
  },
  logout({ commit, state }) {
    commit('logout')
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
