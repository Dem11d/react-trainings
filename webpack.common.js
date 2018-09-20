const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Trainings',
      template: './src/index.ejs',
      inject: 'body'
    })
  ]
};
