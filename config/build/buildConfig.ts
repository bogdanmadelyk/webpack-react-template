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
		mode,
		isDev
	} = options

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true
		},
		resolve: buildResolvers(),
		module: {
			rules: buildLoaders(options)
		},
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined,
	};
}