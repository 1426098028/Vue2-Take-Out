/*
    状态对象数据
*/

// 获取State数据  任意.vue文件
// // 引入：
//         import {mapState} from 'vuex'
//         methods: {
//             ...mapActions(["数据名"])
//         },


export default {
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, //地址相关信息对象
    categorys: [], // 食品分类数组
    shops: [], // 商家数组
    graphicalCode: "",//一次性图形验证码
    SendCode: "",//手机短信验证码
    userInfo: {}, // 用户信息  用户退出
    searchShops: [], // 搜索得到的商家列表


    info: {}, // 商家信息
    ratings: [], // 商家评价列表
    goods: [], // 商品列表


    cartFoods: [], // 购物车中食物的列表
}