const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'mockjs',
      'axios',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-saga',
      'reselect'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../public', '[name].manifest.json'),
      name: '[name]_library'
    })
  ]
}
