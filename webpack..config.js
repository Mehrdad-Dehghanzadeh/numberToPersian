const path = require('path')
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const Chalk = require("chalk");


let config = {

    entry: {
        numberToPersian: path.resolve(__dirname, 'src/numberToPersian.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'numberToPersian.min.js',
    },

    plugins: [new ProgressBarPlugin({
        format: "  build [:bar] " + Chalk.green.bold(":percent") + " (:elapsed seconds)",
        complete: "#",
        clear: false,
    }),]
}

module.exports = (env) => {
    if (env.mode === "development") {
        config.stats = "minimal";
    } else if (env.mode === "production") {
        console.log('okay')
    }

    return config
}