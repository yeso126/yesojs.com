var path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    port:3001
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
          test: /\.sass$/,
          loaders: ['style', 'css', 'sass']
        }
    ]
   }
};
