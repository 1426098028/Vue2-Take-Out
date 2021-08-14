import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 Mock.js
// import '../src/mock/mockServer'
import './mock/mockServer' // 加载mockServer即可
createApp(App).use(store).use(router).mount('#app')