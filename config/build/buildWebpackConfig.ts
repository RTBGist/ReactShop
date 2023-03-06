import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths, port, isDev} = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(paths.html, port) : undefined,
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(paths.html),
	}
}