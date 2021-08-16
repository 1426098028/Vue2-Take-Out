import Vue from 'vue'
import Vuex from 'vuex'
import state from "./State.js"
import actions from "./Actions.js"
import getters from "./Getters.js"
import mutations from "./Mutations.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})
