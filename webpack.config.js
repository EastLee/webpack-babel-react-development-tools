var path = require('path');

var entry = module.exports.entry = {
  'index': './app/index.js'
}

var config = module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle-[name].js"
  },
  resolve: {
    modulesDirectories: ['', 'node_modules','assets/styles']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=250000'
      }
    ]
  }
}
