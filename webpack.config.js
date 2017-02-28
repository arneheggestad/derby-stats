var webpack = require('webpack')

module.exports = {
  entry: './source/index.js',
  output: {
    path: './build/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [ 'latest', 'stage-0', 'react' ]
          }
        }]
      }
    ]
  }
}
