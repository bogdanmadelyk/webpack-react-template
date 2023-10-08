import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';


export const buildConfig = (options: BuildOptions) => {

	const {
		paths,
		mode
	} = options

	return {
		mode: mode,
		entry: paths.entry,
		devtool: 'inline-source-map',
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		module: {
			rules: buildLoaders()
		},
		plugins: buildPlugins(options)
	};
}