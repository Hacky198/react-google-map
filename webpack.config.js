const path = require('path');

module.exports = {
  entry: {
    app:'./src/app.js',
    test:'./src/test.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'cheap-module-eavl-source-map',


  
  // changed line
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};