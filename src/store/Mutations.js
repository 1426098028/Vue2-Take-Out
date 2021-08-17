/*
    直接更新state的多个方法的对象  必须是同步函数
*/
// 引入mutation-types.js 
//                     例子 import { 常量/事件类型名字 } from './mutation-types'


// 基本语法一：
// 函数名(state, 有数据就填变量) {
//     功能模块
//     console.log(state, 有数据就填变量)
// }
// 基本语法二：
// [常量名](state, 有数据就填变量) {
//     功能模块
//     console.log(state, 有数据就填变量)
// }

// 例子一：
// fun(state, Moptions) {
//     console.log(state, Moptions)
// }
// 例子二：
// [YLM](state, Moptions){
//     console.log(state, Moptions)
// }

// 触发actions   任意.vue文件
// this.$store.commit("mutations函数名", 有数据就填变量);
import Vue from 'vue'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_GRAPHICALCODE, RECEIVE_SENDCODE, RECEIVE_USERINFO, RECEIVE_LOGOUT, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, INCREASE_FOOD_COUNT, DECREASE_FOOD_COUNT, CLEAR_CART, RECEIVE_SEARCH_SHOPS } from "./Mutation-types"
export default {

    // 获取地址相关信息对象
    [RECEIVE_ADDRESS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.address = Moptions
    },

    //获取食品分类数组
    [RECEIVE_CATEGORYS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.categorys = Moptions
    },

    //获取商家数组
    [RECEIVE_SHOPS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.shops = Moptions
    },

    //获取一次性图形验证码
    [RECEIVE_GRAPHICALCODE](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        // console.log(Moptions)
        state.graphicalCode = Moptions
    },

    // 获取手机短信验证码
    [RECEIVE_SENDCODE](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        // console.log(Moptions)
        state.SendCode = Moptions
    },

    //获取用户信息     --账号密码--手机登录   共用
    [RECEIVE_USERINFO](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.userInfo = Moptions
    },

    //获取用户退出信息
    [RECEIVE_LOGOUT](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.userInfo = {}
    },

    // 获取搜索的商家内容
    [RECEIVE_SEARCH_SHOPS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.searchShops = Moptions
    },



    // 使用Mock.js 模拟数据  进行Ajax请求拦截  接口

    //获取商家信息
    [RECEIVE_INFO](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.info = Moptions

    },


    //获取商家评价数组
    [RECEIVE_RATINGS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.ratings = Moptions
    },

    //获取商品列表
    [RECEIVE_GOODS](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        state.goods = Moptions
    },





    //增加已选中的商品数量   --同步
    [INCREASE_FOOD_COUNT](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        if (!Moptions.food.count) {
            // Moptions.food.count = 1
            Vue.set(Moptions.food, "count", 1)
            //将food添加到cartFoods中
            state.cartFoods.push(Moptions.food)
        } else {
            Moptions.food.count++
        }

    },

    //减少已选中的商品数量   --同步
    [DECREASE_FOOD_COUNT](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        Moptions.food.count--
        if (Moptions.food.count === 0) {
            state.cartFoods.splice(state.cartFoods.indexOf(Moptions.food), 1)
        }

    },

    //清除购物车   --同步
    [CLEAR_CART](state, Moptions) {
        console.log("------通过Actions获取到的数据------",)
        console.log(state)
        console.log(Moptions)
        // 清除food中的count
        state.cartFoods.forEach(food => food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []

    }













}