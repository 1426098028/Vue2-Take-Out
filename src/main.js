import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./fiters"
Vue.config.productionTip = false
// 引入 Mock.js
import './mock/mockServer' // 加载mockServer即可
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
