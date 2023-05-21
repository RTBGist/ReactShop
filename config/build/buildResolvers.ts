import {ResolveOptions} from "webpack";

export function buildResolvers(src: string): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	}
}
