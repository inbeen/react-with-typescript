const path = require('path')
const webpack = require('webpack')
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
        use: [
          'style-loader', 'css-loader', 'postcss-loader'
        ]
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
    })
  ]
}
