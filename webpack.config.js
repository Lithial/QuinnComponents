//this makes new css resources instead of bundling it with the js
const path = require("path");
//This one is experimental for react fast refresh. This enables hot reloading while keeping state (mostly)
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

let mode = "development";


const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
        template: "./public/index.html"
    }),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
}
if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jge?g|gif|svg)/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: plugins,
    devtool: "source-map",
    devServer: {
        static: "./dist",
    }
}
