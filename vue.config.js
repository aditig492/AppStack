const Webpack = require("webpack");
const Path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
    configureWebpack: {
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            // Extract css files to seperate bundle
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "css/[id].css"
            }),
            // jQuery and PopperJS
            new Webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                jquery: "jquery",
                "window.$": "jquery",
                "window.jQuery": "jquery",
                Popper: ["popper.js", "default"]
            }),
            // Copy fonts and images to dist
            new CopyWebpackPlugin([
                { from: "src/fonts", to: "fonts" },
                { from: "src/img", to: "img" }
            ]),
            // Speed up webpack build
            new HardSourceWebpackPlugin(),
            // Copy dist folder to docs/dist
            new FileManagerPlugin({
                onEnd: {
                    copy: [{ source: "./dist/**/*", destination: "./" }]
                }
            }),
            // Ignore momentjs locales
            new Webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // modify the options...
                return options
            })
    }
}