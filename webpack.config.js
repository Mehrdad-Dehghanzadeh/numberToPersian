const path = require('path')
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const Chalk = require("chalk")


module.exports = {
    context: path.resolve(__dirname, 'src'),
    target: ['web', 'es5'],

    entry: {
        numberToPersian: './numberToPersian.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].min.js",
        library: 'numberToPersian',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js']
    },

    plugins: [
        new CleanWebpackPlugin(),

        new ProgressBarPlugin({
            format: "  build [:bar] " + Chalk.green.bold(":percent") + " (:elapsed seconds)",
            complete: "#",
            clear: false,
        }),]
}
