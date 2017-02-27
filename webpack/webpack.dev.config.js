const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = path.resolve(__dirname,'../');
const srcPath = path.resolve(basePath,'./src');
const distPath = path.resolve(basePath,'./dist');

module.exports = {
  context: srcPath,
  entry : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output : {
    path : distPath,
    publicPath: "/",
    filename:'[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: distPath,
    publicPath: '/',
    port: 8081
  },
  resolve: {
    modules: [path.join(basePath, 'node_modules')],
    alias: {
      components : path.resolve(srcPath,'./components'),
      assets : path.resolve(srcPath,'./assets')
    },
    enforceExtension: false,
    extensions: [".js", ".jsx"],
  },
  module: {
    rules :[
      {
        test: /\.js$|\.jsx$/,
        use: [
          {
            loader:'babel-loader',
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
            options: {
              module: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader:'postcss-loader',
          },
        ]
      }
    ]
  },
  plugins: [
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
    }),
  ],
}
