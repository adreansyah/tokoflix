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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/public/icons/[name].[ext]"
      }
    ]
  },
  
  resolve: {
    extensions: ['*', '.ts', '.js', '.jsx','css'],   
    
  },
  output: {
      // path: path.resolve(__dirname, "build/"),
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
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
  },
  // externals: {
  //   'react': 'React'
  // },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  }
};