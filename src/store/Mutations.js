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

import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_GRAPHICALCODE, RECEIVE_SENDCODE } from "./Mutation-types"
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
    }



}