/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: {
    index: './src/client/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: 'url-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts', '.less', '.scss', '.sass', '.css'],
    // antd icon 
    alias: {
      '@ant-design/icons/lib/dist$': path.resolve(
        __dirname,
        '../src/client/icons.js'
      )
    }
  },
  externals: {
    lodash: {
      commonjs  : 'lodash',
      commonjs2 : 'lodash',
      amd       : 'lodash',
      root      : '_'
    },
    react: 'React'
  }
};
