const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','css'],   
  },
  
  output: {
    path: path.resolve(__dirname, '/dist'),
    // publicPath: '/',
    filename: 'bundle.js',   
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: '/',
    filename: 'bundle.js', 
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
};