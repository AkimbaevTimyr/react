import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const sassLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        typescriptLoader,
        sassLoader,
        svgLoader,
        fileLoader
    ]
}
