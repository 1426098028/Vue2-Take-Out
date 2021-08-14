/*
    通过mutations间接更新state的多个方法的对象   可以是异步或同步函数
*/
// 实践中，我们会经常用到 ES2015 的参数解构来简化代码（特别是我们需要调用 {commit} 很多次的时候）
//  context或{ commit }必须   Aoptions可选
// 基本语法：
// 函数名(context或{ commit }, 有数据就填变量){
//     功能模块
//     触发mutations函数方式:
//                     context:
//                             context.commit('mutations函数名',有数据就填变量)
//                     {commit}:
//                             commit('mutations函数名',有数据就填变量)

// }

// 例子：
//     getAddres({ commit }, Aoptions) {
//         commit('RECEIVE_ADDRESS', Aoptions)
//     }

// 触发actions   任意.vue文件
// 一
// this.$store.dispatch("actions函数名字", 有数据就填变量);
// 二   任意.vue文件
// // 引入：
//         import {mapActions} from 'vuex'
//         methods: {
//             ...mapActions(["函数名"])
//         },








import {
    reqAddres,
    reqFoodCategorys,
    reqShops,
    reqSearchShop,
    reqCaptcha,
    reqPwdLogin,
    reqSendCode,
    reqSmsLogin,
    reqUserInfo,
    reqLogout,
} from "../Api/main.js";
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_GRAPHICALCODE, RECEIVE_SENDCODE } from "./Mutation-types"
export default {
    // 发送获取地址相关信息对象请求
    async getAddres({ commit }, Aoptions) {
        let res = await reqAddres()
        console.log("获取数据", res)
        if (res.code === 0) {
            console.log("------Actions--通过commit触发Mutauions--RECEIVE_ADDRESS------",)
            commit(RECEIVE_ADDRESS, res.data)
        }
    },

    // 发送获取食品分类数组请求
    async getFoodCategorys({ commit }, Aoptions) {
        let res = await reqFoodCategorys()
        if (res.code === 0) {
            console.log("------Actions--通过commit触发Mutauions--RECEIVE_CATEGORYS------",)
            commit(RECEIVE_CATEGORYS, res.data)
        }
    },

    // 发送获取商家数组请求
    async getShops({ commit }, Aoptions) {
        let res = await reqShops({
            params: {
                latitude: 40.10038, // 纬度
                longitude: 116.36867, // 经度
            },
            body: {
                latitude: 40.10038, // 纬度
                longitude: 116.36867, // 经度
            },
        })
        if (res.code === 0) {
            console.log("------Actions--通过commit触发Mutauions--RECEIVE_SHOPS------",)
            commit(RECEIVE_SHOPS, res.data)
        }
    },

    //发送获取一次性图形验证码请求
    async getCaptcha({ commit }, Aoptions) {
        let res = await reqCaptcha()
        console.log("------Actions--通过commit触发Mutauions--RECEIVE_GRAPHICALCODE------",)
        commit(RECEIVE_GRAPHICALCODE, res)
    },

    //发送获取手机短信验证码
    async getSendCode({ commit }, Aoptions) {
        alert("已关闭手机号获取验证码请求,请开启请求")
        // let res = await reqSendCode(Aoptions)
        console.log("------Actions--通过commit触发Mutauions--RECEIVE_SENDCODE------",)
        commit(RECEIVE_SENDCODE, res)
    }
}