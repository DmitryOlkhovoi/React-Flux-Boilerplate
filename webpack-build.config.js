var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: '/dist/js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
