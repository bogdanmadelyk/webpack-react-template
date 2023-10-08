import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';


export const buildConfig = (options: BuildOptions): webpack.Configuration => {

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
		resolve: buildResolvers(),
		module: {
			rules: buildLoaders()
		},
		plugins: buildPlugins(options),
		devServer: buildDevServer(options)
	};
}