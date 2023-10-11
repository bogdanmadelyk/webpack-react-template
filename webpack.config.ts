import {BuildEnv, BuildPaths} from './config/build/types';
import path from 'path';
import {buildConfig} from './config/build/buildConfig';
import webpack from 'webpack';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const port = env.port || 3000
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildConfig({
        paths,
        mode,
        port,
        isDev
    })

    return config
}