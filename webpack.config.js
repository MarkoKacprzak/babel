var path1 = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path1.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
            }
        ]
    }
}
