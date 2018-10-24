const HTMLPlugin = require('html-webpack-plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/src/build`
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new UglifyJS({include: /\.min\.js$/})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
}