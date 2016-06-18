var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    port:3000
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
          // loaders: ['style', 'css', 'sass', 'postcss']
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }
    ]
  },resolve: {
    extensions: ['.js', '.sass','.scss','.jsx','.css', '']
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
