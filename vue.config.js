/*
 * @Author: guzx
 * @Date: 2020-03-16 13:07:20
 * @Description:  项目的基本配置
 * @Last Modified by:   guzx
 * @Last Modified time: 2020-03-16 13:07:20
 */

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commonjs': '@/commonJs',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
  // devServer: {
  //   open: true, //是否自动弹出浏览器页面
  //   host: "localhost",
  //   port: '8080',
  //   https: false,   //是否使用https协议
  //   hotOnly: true, //是否开启热更新
  //
  //   // 使用代理处理游览器的跨域问题
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://v.juhe.cn', //API服务器的地址
  //   //     ws: true,  //代理webSockets
  //   //     changeOrigin: true, // 虚拟的站点需要更管origin
  //   //     pathRewrite: {   //重写路径 比如'/api/aaa'重写为'/aaa'
  //   //       '^/api': ''
  //   //     }
  //   //   },
  //   // }
  // }
};
