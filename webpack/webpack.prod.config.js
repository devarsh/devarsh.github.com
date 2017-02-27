const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const basePath = path.resolve(__dirname,'../');
const srcPath = path.resolve(basePath,'./src');
const distPath = path.resolve(basePath,'./dist');

const loaders = {
  css: conf => ({
    loader: 'css-loader',
    options: Object.assign({}, {
      modules: true,
      minimize: true,
      sourceMap: false,
      localIdentName: '[hash:base64:8]',
    }, conf),
  }),
  postcss: conf => ({
    loader: 'postcss-loader',
    options: Object.assign({}, {
      sourceMap: false,
    }, conf),
  }),
}

module.exports = {
  context: srcPath,
  entry : {
    index:['./index.js'],
    vendor: ['react','react-dom'],
  },
  output : {
    path : distPath,
    publicPath: "/",
    filename:'[name].[chunkhash].js',
    chunkFilename: "[name].[chunkhash].js",
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
        loader: ExtractTextPlugin.extract({
          loader: [loaders.css({ importLoaders: 1 }), loaders.postcss()],
        }),
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
    new CompressionPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor','manifest'],
      minChunks: Infinity,
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
    }),
  ],
}
