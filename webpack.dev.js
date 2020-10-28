const path = require('path');

module.exports = {
  mode: 'development',  //* or production mode
  entry: './src/react.tsx', //? ここからStartする
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ["tsx", ".ts", ".js"],
  }
}