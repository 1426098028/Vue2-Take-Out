import { createRouter, createWebHistory } from 'vue-router'
import Msite from "../views/Msite/Msite.vue"//首页
import Search from "../views/Search/Search.vue"//搜索
import Order from "../views/Order/Order.vue"//订单
import Profile from "../views/Profile/Profile.vue"//个人





const routes = [
  {
    path: '/Msite',
    name: 'Msite',
    component: Msite
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
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




