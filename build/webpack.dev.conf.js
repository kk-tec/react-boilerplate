const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve('src/index.js'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

export default config;
