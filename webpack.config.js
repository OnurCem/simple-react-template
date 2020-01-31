const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JS_JSX_PATTERN = /\.jsx?$/i;
const SASS_PATTERN = /\.s[ac]ss$/i;

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    './src/polyfills.js',
    './src/App.jsx'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: JS_JSX_PATTERN,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: SASS_PATTERN,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  devServer: {
    port: 3000,
    hot: true
  }
};
