module.exports = {
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;
        disableHostCheck: true,
        // 下面为需要跨域的
        proxy: { //配置跨域
            '/api': {
                //         // target: 'http://192.168.10.105:8000/api', //这里后台的地址模拟的;应该填写你们真实的后台接口
                target: 'http://127.0.0.1:4000', //这里后台的地址模拟的;应该填写你们真实的后台接口
                // target: 'http://192.168.10.105:8000/api/', //这里后台的地址模拟的;应该填写你们真实的后台接口
                // ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以
                }
            }
        }
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    publicPath: './',
    assetsDir: 'static',
}