const path = require('path');

module.exports = {
  entry: './dist/main.js', //? ここからStartする
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}