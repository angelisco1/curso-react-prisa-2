let path = require('path');
let entryPath = path.join(__dirname, 'src'),
    outputPath = path.join(__dirname, 'dist');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // loaders: ['style-loader', 'css-loader']
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outputPath
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        // loaders: ['style-loader', 'css-loader', 'sass-loader']
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: outputPath
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    contentBase: outputPath
  }
}