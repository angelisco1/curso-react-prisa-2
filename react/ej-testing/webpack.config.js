var path = require('path');
var entryPath = path.join(__dirname, 'src'),
    outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [path.join(entryPath, 'app.js')],
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: entryPath,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
}