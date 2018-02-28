var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, APP_DIR),
    ], 
    extensions: ['.js', '.jsx'],
  },
  module : {
    loaders : [
      {
        test : /\.js|jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
          publicPath: '/',
        }
        ),
      }, 
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ]
};

module.exports = config;