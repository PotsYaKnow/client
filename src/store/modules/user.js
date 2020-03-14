const state = {
  isUserLoggedIn: false
}

const mutations = {
  login(state) {
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

const getters = {
  isUserLoggedIn: state => {
    return state.isUserLoggedIn
  }
}



export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
