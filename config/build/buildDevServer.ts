import {BuildOptions} from './types';
import type {Configuration} from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): Configuration => {
	return {
		port: options.port,
		open: true,
		hot: true
	};
};