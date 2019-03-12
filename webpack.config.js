const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html"
  });

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/dist"),
        publicPath: "/",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Dev server options
    devServer: {
        port: 3030,
        historyApiFallback: true,
        inline: true,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        // ovi svi moduli bi mogli ic u zasebni file koji ce se importat onda
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // registracija tslint-a u bundle, naci kad oces tslint ubacit ti treba tslint & tslint-loader za dev dependencies
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "tslint-loader",
                include: [path.resolve(__dirname, "../src")]
            },
            {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), htmlWebpackPlugin
    ]
};