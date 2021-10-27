const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias.set('@/', resolve('src'))
    // config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    let plugins = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  }
}
