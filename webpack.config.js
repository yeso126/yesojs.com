module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port:3000
  },
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
};
