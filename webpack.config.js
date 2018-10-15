const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/index.html`}),
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