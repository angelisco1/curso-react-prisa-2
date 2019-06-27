var path = require('path');
var entryPath = path.join(__dirname, 'src'),
    outputPath = path.join(__dirname, 'dist');

module.exports = {
    entry: [path.join(entryPath, 'app.js')],
    output: {
        filename: 'bundle.js',
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: outputPath,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}