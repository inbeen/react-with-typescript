const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.common.config')

module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    port: 8080
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
