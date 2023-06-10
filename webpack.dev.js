const { mergeWithCustomize } = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = mergeWithCustomize({
    customizeObject: {
        mode: "replace",
        devtool: "replace",
        plugins: 'append'
    }
})(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new NodemonPlugin()
    ]
});