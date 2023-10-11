import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[]  => {
	return [
		new HTMLWebpackPlugin({
			template: options.paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: options.isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
			chunkFilename: options.isDev ? 'css/[id].css' : 'css/[name].[contenthash:8].css',
		})
	]
}