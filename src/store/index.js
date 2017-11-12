import Vue from 'vue'
import Vuex from 'vuex'
import Services from '@/api/Services'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,

  state: {
    error: false,
    categories: null,
    contact: null,
    loading: false
  },

  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },

    setContact (state, contact) {
      state.contact = contact
    },

    handleError (state, error) {
      state.error = error
    },

    isLoading (state, loading) {
      state.loading = loading
    }
  },

  actions: {
    setCategories ({commit}, categories) {
      commit('isLoading', true)

      if (!categories) {
        Services.getCategory()
          .then((response) => {
            if (response.data.success === false) {
              throw new Error()
            }

            commit('setCategories', response.data)

            commit('isLoading', false)
          })
          .catch((e) => {
            commit('handleError', true)
          })
      } else {
        commit('setCategories', categories)
      }
    },

    setContact ({commit}) {
      commit('isLoading', true)

      Services.getContactInfo()
        .then((response) => {
          if (response.data.success === false) {
            throw new Error()
          }

          commit('setContact', response.data)

          commit('isLoading', false)
        })
        .catch((e) => {
          commit('handleError', true)
        })
    },

    handleError ({commit}, err) {
      commit('handleError', err)
    },

    isLoading ({commit}, loading) {
      commit('isLoading', loading)
    }
  }
})
