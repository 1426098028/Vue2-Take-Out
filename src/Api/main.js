import FlyAjaxPromise from './FlyAjaxPromise'


// [1、根据经纬度获取位置详情]

export const reqAddres = (Geohash) => { return FlyAjaxPromise({ url: "/position/40.10038,116.36867", method: "get", ...Geohash, }) }

// [2、获取食品分类列表]
export const reqFoodCategorys = (FoodCategorys) => { return FlyAjaxPromise({ url: "/index_category", method: "get", ...FoodCategorys, }) }

// // [3、根据经纬度获取商铺列表]
export const reqShops = (ShopsLocation) => { return FlyAjaxPromise({ url: "/shops", method: "get", ...ShopsLocation, }) }

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
export const reqSearchShop = (SearchShop) => { return FlyAjaxPromise({ url: "/search_shops", method: "get", ...SearchShop }) }
// export const reqSearchShop = (SearchShop) => { return FlyAjaxPromise({ url: "/search_shops", method: "get", params: { ...SearchShop }, body: { ...SearchShop } }) }

// [5、获取一次性验证码]
export const Onecode = (code) => { return FlyAjaxPromise({ url: "/captcha", method: "get", ...code }) }



// [6、用户名密码登陆]
// export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')
export const reqPwdLogin = (PwdLogin) => { return FlyAjaxPromise({ url: "/login_pwd", method: "POST", ...PwdLogin }) }

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
export const reqSendCode = (phone) => { return FlyAjaxPromise({ url: "/sendcode", method: "get", ...phone }) }



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
export const reqSmsLogin = (SmsLogin) => { return FlyAjaxPromise({ url: "/login_sms", method: "POST", ...SmsLogin }) }

// // [9、根据会话获取用户信息]

// export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`)
export const reqUserInfo = (UserInfo) => { return FlyAjaxPromise({ url: "/userinfo", method: "get", ...UserInfo }) }

// // [10、用户登出]
// export const reqLogout = () => ajax(`${BASE_URL}/logout`)
export const reqLogout = (Logout) => { return FlyAjaxPromise({ url: "/logout", method: "get", ...Logout }) }


// /**
//  * 获取商家信息
//  */
// export const reqShopInfo = () => ajax('/info')

// /**
//  * 获取商家评价数组
//  */
// export const reqShopRatings = () => ajax('/ratings')

// /**
//  * 获取商家商品数组
//  */
// export const reqShopGoods = () => ajax('/goods')