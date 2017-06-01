const path = require('path');

module.exports = {
        entry: {
            main: './test/main.js'
        },
        output: {
            path: './dist',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                // component's css, use to-string-loader for angular stylesUrl in components
                {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, './src/style'),
                    include: path.resolve(__dirname, './src/app'),
                    loader: ['to-string-loader','css-loader']
                }
            ]
        },
        devtool: 'inline-source-map'
};