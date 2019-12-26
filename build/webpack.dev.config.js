/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const Dotenv = require('dotenv-webpack');


const ENV_PATH = path.join(__dirname, "..", ".env")

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve('./dist/client'),
    filename: '[name].js',
    globalObject : 'this',
    libraryTarget : 'umd'
  },
  devServer: {
    hot: true,
    inline: true,
    proxy: {
      '/': 'http://localhost:8082'
    }
  },
  module: {
    rules: [
      {
        test : /\.css$/,
        use : [
          {
            loader : 'style-loader',
            options : {
              injectType : 'styleTag'
            }
          },
          "css-loader"
        ]
      },
      {
        test : /\.s[ac]ss$/i,
        exclude : /node_modules/,
        use : [
          'style-loader',
          'css-loader',
          {
            loader : 'sass-loader',
            options : {
              implementation : require("sass"),
              sassOptions: {
                fiber: false,
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include : /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/template/index.ejs',
      favicon: './build/template/favicon.ico',
      env: process.env.NODE_ENV
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
        path: ENV_PATH
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
};

module.exports = merge(baseConfig, devConfig);
