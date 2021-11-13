//配置路径别名
console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  //修改文件路径
  publicPath:process.env.NODE_ENV === 'production'?'/prod/':'/',
  outputDir:'prod',                  //指定打包后的目录
  assetsDir:"static",               //css、img、js、font等资源
  //声明配置webpack
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
}