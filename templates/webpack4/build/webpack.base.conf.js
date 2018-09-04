const path = require("path");
const config = require('./config');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    output: {
        path: config.build.dist,
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    }
};