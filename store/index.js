import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      home,
    },
  })
}

export default createStore
