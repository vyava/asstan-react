/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin')
const merge = require('webpack-merge');
const {
  default: WebpackDeepScopeAnalysisPlugin
} = require('webpack-deep-scope-plugin');
const QiniuUploadPlugin = require('qiniu-upload-plugin');
const qiniuConfig = require('./qiniu.config');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: qiniuConfig.publicPath,
    path: path.resolve('./dist/client'),
    filename: 'cdfang-spider-[name]-[contenthash:8].js'
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
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'asstan-[name].[hash:8].css'
    }),
    new WebpackDeepScopeAnalysisPlugin(),
    // scope hosting，production 
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: './build/template/index.ejs',
      favicon: './build/template/favicon.ico',
      env: process.env.NODE_ENV
    }),
    // 404
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './build/template/404.ejs',
      favicon: './build/template/favicon.ico',
      inject: false
    }),
    // pwa 
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true, // servece worker
      skipWaiting: true,  
      importWorkboxFrom: 'cdn',
      include: [/\.js$/, /\.css$/, /\.ico$/],
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  },
  externals: {
    'react-dom': 'ReactDOM',
  }
};

// ci cdn
if (process.env.BUILD_ENV !== 'ci' && process.env.BUILD_ENV !== 'analysis') {
  prodConfig.plugins.push(new QiniuUploadPlugin(qiniuConfig));
}

module.exports = merge(baseConfig, prodConfig);
