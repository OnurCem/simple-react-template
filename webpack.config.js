const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const JS_JSX_PATTERN = /\.jsx?$/;

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: JS_JSX_PATTERN,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    port: 3000,
    hot: true
  }
};
