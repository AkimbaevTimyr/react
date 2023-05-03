import path from 'path'
import type webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildMode, type BuildOptions } from './config/build/types/config'

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const options: BuildOptions = {
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        },
        isDev,
        port: PORT
    }

    const config: webpack.Configuration = buildWebpackConfig(options)

    return config
}
