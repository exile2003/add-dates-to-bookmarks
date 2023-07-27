const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: __dirname + '/src/index.js',
        routes: __dirname + '/src/js/filestyle.js'
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),

        // the line below points to the destination of the graphics files in the build (for
        // example: assets/img/flag_en_big.jpg). W/o this line, the destination would be like ./74642121020e5fa5a497.jpg

         //assetModuleFilename: 'assets/img/[name][ext]'
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' },

            // { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader', }, ]},

            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            { test: /\.(png|jpe?g|gif)$/i, type: 'asset/resource' },

            // { test: /\.js$/, use: 'babel-loader' }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: path.resolve(__dirname, "dist", "index.html"),
            chunks: ['index']
        }),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],
}