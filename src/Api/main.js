import FlyAjaxPromise from './FlyAjaxPromise'

import axios from 'axios'

const AjaxUrl = '/api'

// [1、根据经纬度获取位置详情]
export const reqAddres = (Geohash) => { return FlyAjaxPromise({ url: `${AjaxUrl}/position/40.10038,116.36867`, method: "get", ...Geohash, }) }

// [2、获取食品分类列表]
export const reqFoodCategorys = (FoodCategorys) => { return FlyAjaxPromise({ url: `${AjaxUrl}/index_category`, method: "get", ...FoodCategorys, }) }

// [3、根据经纬度获取商铺列表]
export const reqShops = (ShopsLocation) => { return FlyAjaxPromise({ url: `${AjaxUrl}/shops`, method: "get", ...ShopsLocation, }) }

// // [4、根据经纬度和关键字搜索商铺列表]
// {
//     params: { 
//       geohash:`40.10038,116.36867`,
//       keyword:"test", 
//       },
//     body: { 
//       geohash:`40.10038,116.36867`,
//       keyword:"test", 
//     },
// }
export const reqSearchShop = (SearchShop) => { return FlyAjaxPromise({ url: `${AjaxUrl}/search_shops`, method: "get", ...SearchShop }) }
// export const reqSearchShop = (SearchShop) => { return FlyAjaxPromise({ url: "/search_shops", method: "get", params: { ...SearchShop }, body: { ...SearchShop } }) }

// [5、获取一次性图形验证码]
export const reqCaptcha = (Captcha) => { return FlyAjaxPromise({ url: `${AjaxUrl}/captcha`, method: "get", ...Captcha }) }

// [6、用户名密码登陆]
// export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')
export const reqPwdLogin = (PwdLogin) => { return FlyAjaxPromise({ url: `${AjaxUrl}/login_pwd`, method: "POST", ...PwdLogin }) }

// [7、发送短信验证码]
// {
//     params: {
//         phone: "15622081255",
//     },
//     body: {
//         phone: "15622081255",
//     },
// }
// // export const reqSendCode = (phone) => ajax(BASE_URL + "/sendcode" + { phone })
// export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })
export const reqSendCode = (phone) => { return FlyAjaxPromise({ url: `${AjaxUrl}/sendcode`, method: "get", ...phone }) }



// // [8、手机号验证码登陆]
// {
//     params: { 
//      phone:"15622081255",
//      code:"317693"
//     },
//     body: { 
//      phone:"15622081255",
//      code:"317693"
//     },
// }
// export const reqSmsLogin = (phone, code) => ajax(BASE_URL + "/login_sms", { phone, code }, "POST")
export const reqSmsLogin = (SmsLogin) => { return FlyAjaxPromise({ url: `${AjaxUrl}/login_sms`, method: "POST", ...SmsLogin }) }

// // [9、根据会话获取用户信息]

// export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`)
export const reqUserInfo = (UserInfo) => { return FlyAjaxPromise({ url: `${AjaxUrl}/userinfo`, method: "get", ...UserInfo }) }

// // [10、用户登出]
// export const reqLogout = () => ajax(`${BASE_URL}/logout`)
export const reqLogout = (Logout) => { return FlyAjaxPromise({ url: `${AjaxUrl}/logout`, method: "get", ...Logout }) }






// 使用Mock.js 模拟数据  进行Ajax请求拦截    Mock.js好像不支持Flyio请求   这里使用Axios发送请求
/**
 * 获取商家信息
 */
// export const reqShopInfo = (ShopInfo) => { return FlyAjaxPromise({ url: "/info", method: "get", ...ShopInfo }) }
export const reqShopInfo = () => {
    let RequestResults
    return new Promise((resolve, reject) => {
        RequestResults = axios({
            method: "get",
            url: "/info",
        });
        RequestResults.then((res) => {
            console.log("请求Asiox成功---------------", res.data)
            resolve(res.data)
        })
        RequestResults.catch((err) => {
            console.log("请求Asios失败--------------", err)
            reject(err)
        })
    });
}

/**
 * 获取商家评价数组
 */
// export const reqShopRatings = (ShopRatings) => { return FlyAjaxPromise({ url: "/ratings", method: "get", ...ShopRatings }) }
export const reqShopRatings = () => {
    let RequestResults
    return new Promise((resolve, reject) => {
        RequestResults = axios({
            method: "get",
            url: "/ratings",
        });
        RequestResults.then((res) => {
            console.log("请求Asiox成功---------------", res)
            resolve(res.data)
        })
        RequestResults.catch((err) => {
            console.log("请求Asios失败--------------", err)
            reject(err)
        })
    });
}

/**
 * 获取商家商品数组
 */
// export const reqShopGoods = (ShopGoods) => { return FlyAjaxPromise({ url: "/goods", method: "get", ...ShopGoods }) }
export const reqShopGoods = () => {
    let RequestResults
    return new Promise((resolve, reject) => {
        RequestResults = axios({
            method: "get",
            url: "/goods",
        });
        RequestResults.then((res) => {
            console.log("请求Asiox成功---------------", res)
            resolve(res.data)
        })
        RequestResults.catch((err) => {
            console.log("请求Asios失败--------------", err)
            reject(err)
        })
    });
}


