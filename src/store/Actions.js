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
    Onecode,
    reqPwdLogin,
    reqSendCode,
    reqSmsLogin,
    reqUserInfo,
    reqLogout,
} from "../Api/main.js";
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from "./Mutation-types"
export default {
    async getAddres({ commit }, Aoptions) {
        let res = await reqAddres()
        console.log("获取数据", res)
        if (res.code === 0) {
            Aoptions = res.data
            console.log("------Actions--通过commit触发Mutauions--RECEIVE_ADDRESS------",)
            commit(RECEIVE_ADDRESS, Aoptions)
        }
    }
}