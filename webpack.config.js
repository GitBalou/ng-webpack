const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // folder containing files to process
    context: path.resolve(__dirname, './src'),

    /**
     * Entry points
     * app contains all app file
     * vendor contains angular and other externals lib
     */
    entry: {
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

    // webpack resolves js and ts files
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./app'),
            'node_modules'
        ]
    },

    // enable source map
    devtool: 'source-map',

    // additional module
    module: {
        rules: [

            // typescript
            {
                test: /\.ts/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    /*
    *   plugins
     */
    plugins: [

        // generate html index with bundled files
        new HtmlWebpackPlugin({
        template: './index.html',
        chunks: ['app']
    })],

    // dev server
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // index is served from src
        historyApiFallback: true // fallback any 404 error to index.html
    }

};