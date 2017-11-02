import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    status,
    categories: []
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },
    handleError (state, status) {
      state.status = status
    }
  },
  actions: {
    setCategories ({commit}, categories) {
      commit('setCategories', categories)
    },
    handleError ({commit}, status) {
      commit('handleError', status)
    }
  }
})
