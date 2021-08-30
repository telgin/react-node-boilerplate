const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.app.js'
    },
    devServer: {
        contentBase: './dist',
        proxy: {
            "/": "http://localhost:8080"
        },
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
           filename: 'index.html',
           template: './public/index.html',
           favicon: './public/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
           {
             test: /\.css$/,
             include: /node_modules/,
             use: ['style-loader', 'css-loader']
           },
           {
             test: /\.css$/,
             exclude: /node_modules/,
             use: ['style-loader', 'css-loader'],
           },
           {
               test: /\.(ttf|png)$/,
               use: ['file-loader'],
            }
        ]
    }
}