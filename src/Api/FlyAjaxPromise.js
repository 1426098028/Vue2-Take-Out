//引入fly实例
var fly = require("flyio")
const AjaxUrl = '/api'
export default function FlyAjaxPromise(obj) {
    console.log("初始数据", obj)
    // console.log(" 转换 method值为大写", obj.method.toUpperCase().toString())
    let RequestResults
    //添加请求拦截器
    fly.interceptors.request.use(
        (request) => {
            // console.log("拦截请求成功", request)
        },
        (err) => {
            // console.log("拦截请求失败", err)
        })
    //添加响应拦截器，响应拦截器会在then/catch处理之前执行
    fly.interceptors.response.use(
        (response) => {
            // console.log("拦截响应成功", response)
        },
        (err) => {
            // console.log("拦截响应失败", err)
        }
    )
    //发起请求
    return new Promise((resolve, reject) => {
        RequestResults = fly.request({
            url: `${AjaxUrl}${obj.url}`,
            method: obj.method.toUpperCase().toString(),// 转换 method值为大写
            body: obj.body,
            params: obj.params
        })
        RequestResults.then((res) => {
            // console.log("请求成功", res)
            resolve(res.data)
        })
        RequestResults.catch((err) => {
            // console.log("请求失败", err)
            reject(err)
        })
    });
}



