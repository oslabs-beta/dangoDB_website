const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    // in production, the bundle will live on file System
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
  },
  devServer: {
    static: {
      publicPath: '/',
      // directory: path.resolve(__dirname, 'build'),
      directory: path.resolve(__dirname, './src'),
    },
    proxy: {
      '/': 'http://localhost:3000',
      '/save-schema': 'http://localhost:3000',
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
        favicon: './src/assets/dango_deno_256.png'
      }, 
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
