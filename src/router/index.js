import { createRouter, createWebHistory } from 'vue-router'
import Msite from "../views/Msite/Msite.vue"//首页
import Search from "../views/Search/Search.vue"//搜索
import Order from "../views/Order/Order.vue"//订单
import Profile from "../views/Profile/Profile.vue"//个人
import Login from "../views/Login/Login.vue"//登录





const routes = [
  {
    path: '/Msite',
    name: 'Msite',
    component: Msite,
    meta: {
      iSshowFooter: true
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
    meta: {
      iSshowFooter: true
    }
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order,
    meta: {
      iSshowFooter: true
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      iSshowFooter: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      iSshowFooter: false
    }
  },
  {//设置默认显示首页
    path: "/",
    redirect: "/Msite"
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




