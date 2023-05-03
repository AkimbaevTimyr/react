import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions, BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html, title: 'Development' }), // плагин с помощью которого все файлы вставляют в корневой html файл
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS__DEV: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
