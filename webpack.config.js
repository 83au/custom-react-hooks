const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ title: 'Custom React Hooks' })],
};
