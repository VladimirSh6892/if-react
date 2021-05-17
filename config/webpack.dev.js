const { merge } = require('webpack-merge');
const prodConfig = require('./webpack.prod')

module.exports = merge(prodConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        open: true,
    },
    devtool: 'inline-source-map',       
});
