import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {

	const {
		isDev,
		paths
	} = options;

	return [
		new HTMLWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[name].[contenthash:8].css',
		}),
		isDev && new ReactRefreshWebpackPlugin()
	].filter(Boolean);
};