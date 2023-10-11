import {BuildOptions} from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptions) => {

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					},
				}
			},
			'sass-loader'
		]
	}

	return [
		tsLoader,
		cssLoader
	]
}