/*
  vuex最核心的管理对象store
*/
import { createStore } from 'vuex'
import state from "./State.js"
import actions from "./Actions.js"
import getters from "./Getters.js"
import mutations from "./Mutations.js"


export default createStore({
  state,
  actions,
  getters,
  mutations,
})