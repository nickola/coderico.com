const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './source', 'index.js'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, './source', 'index.html')})
  ],
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000
  }
};
