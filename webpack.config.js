const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // folder containing files to process
    context: path.resolve(__dirname, './src'),

    // entry points
    entry: {
        "polyfill": "./polyfill",
        "vendor": "./vendor",
        "app": "./main"
    },

    /**
     * Output is served from here
     */
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: "./dist/[name].bundle.js"
    },

    // Extensions to look for when implicit `import` is encountered
    resolve: {
        extensions: ['.ts', '.js']
    },

    // enable source map
    devtool: 'source-map',

    // additional module
    module: {
        rules: [

            // typescript : 1/load ts, 2/use template-loader for templateUrl
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: /node_modules/
            },

            // html
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    /*
     *   plugins
     */
    plugins: [

        // remove shared dependencies between bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfill']
        }),

        // generate html index with bundled files
        new HtmlWebpackPlugin({
            template: './index.html'
        })],

    // dev server
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // index is served from src
        historyApiFallback: true // fallback any 404 error to index.html
    }

};