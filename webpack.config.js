const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      appStyles: path.resolve(__dirname, './app/styles/app.scss'),
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      Nav: path.resolve(__dirname, './app/components/Nav.jsx'),
      burgerIcon: path.resolve(__dirname, './app/transformicons.js'),
      layoutData: path.resolve(__dirname, './data/layout.json')
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader' 
      }
    ]
  }
}
