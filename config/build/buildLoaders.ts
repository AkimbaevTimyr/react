import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
                        localIdentName: options.isDev ?  "[path][name]__[local]--[hash:base64:8]" : "[hash:base64:8]"
                    },
                },
            },
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        sassLoader
    ]
}