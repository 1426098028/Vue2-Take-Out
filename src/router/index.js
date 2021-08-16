import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from "../views/Msite/Msite.vue"//首页    --一级路由
import Search from "../views/Search/Search.vue"//搜索   --一级路由
import Order from "../views/Order/Order.vue"//订单    --一级路由
import Profile from "../views/Profile/Profile.vue"//个人    --一级路由
import Login from "../views/Login/Login.vue"//登录

import Shop from "../views/Shop/Shop.vue"//食品商家   --一级路由
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods.vue"//食品商家商品    --二级路由
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo.vue"//食品商家信息    --二级路由
import ShopRatings from "../views/Shop/ShopRatings/ShopRatings.vue"//食品商家评分    --二级路由

Vue.use(VueRouter)

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
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
    children: [
      {
        path: '/Shop/Goods',
        name: 'ShopGoods',
        component: ShopGoods,
      },
      {
        path: '/Shop/Info',
        name: 'ShopInfo',
        component: ShopInfo,
      },
      {
        path: '/Shop/Ratings',
        name: 'ShopRatings',
        component: ShopRatings,
      },
      {//设置默认显示首页
        path: "",
        redirect: "/Shop/Goods"
      },
    ]
  },
  {//设置默认显示首页
    path: "/",
    redirect: "/Msite"
  },
]
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
