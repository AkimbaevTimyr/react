import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export function  buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options;

    return {
        mode,
        entry : paths.entry,  //путь к корневому файлу приложения
        module: {
        //указываем лоадеры для обработки файлов
        rules: buildLoaders(options)
    },
        resolve: buildResolvers(),
            output: {
        filename: '[name].[contenthash].js', //название файла сборки
            path: paths.build , //путь к папке в которой будет храниться сборка
            clean: true,
    },
        plugins: buildPlugins(options),
        devtool: isDev ?  'inline-source-map' : undefined,
        devServer: isDev ?  buildDevServer(options) : undefined,
    }
}