import {BuildPaths} from './config/build/types';
import path from 'path';
import {buildConfig} from './config/build/buildConfig';
import webpack from 'webpack';

const paths: BuildPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const config: webpack.Configuration = buildConfig({
    paths: paths,
    mode: 'development'
})

export default config