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
      MatchViewWrapper: path.resolve(__dirname, './app/components/MatchViewWrapper.jsx'),
      MatchView: path.resolve(__dirname, './app/components/MatchView.jsx'),
      NonMatchView: path.resolve(__dirname, './app/components/NonMatchView.jsx'),
      Background: path.resolve(__dirname, './app/components/Background.jsx'),
      layoutData: path.resolve(__dirname, './data/layout.json'),
      marketsData: path.resolve(__dirname, './data/markets.json')
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
