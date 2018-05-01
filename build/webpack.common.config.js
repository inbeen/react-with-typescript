const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const root = __dirname

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, '../public/'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /(\.tsx?)$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('../public/vendor.manifest.json')
    }),
    new ExtractTextPlugin('style.css')
  ]
}
