const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/global.scss";`
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // path.resolve(__dirname, './src/assets/scss/global.scss'),
        // path.resolve(__dirname, './src/assets/less/fonticon.less')
      ]
    }
  },
  configureWebpack: config => {},
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: "icon-[name]"
    })
    .end()
    // config.resolve.alias
    // .set('@', path.resolve(__dirname, './src'))
    // .set('@components', path.resolve(__dirname, './src/components'))
    // .set('@views', path.resolve(__dirname, './src/views'))
    // .set('@assets', path.resolve(__dirname, './src/assets'))
  },
  parallel: false,
  lintOnSave: true,
  productionSourceMap: true, //不生成map
  runtimeCompiler: true, // 包含运行时编译器的 Vue 构建版本
  publicPath: './',
  // outputDir: '../tt/www/', // 输出的dist文件夹路径
  assetsDir: './',
  filenameHashing: true,
  devServer: {
    port: 8088,
    open: false,
    hot: true,
    https: false,
    // contentBase: path.resolve(__dirname, '../..', 'www'),
    proxy: {
      //匹配规则
      '/api': {
        //要访问的跨域的域名
        target: 'http://localhost:3000',
        ws: true,
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changOrigin: true, //开启代理
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
