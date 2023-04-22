// import {ResolveOptions} from "webpack";
//
// export function buildResolvers(): ResolveOptions {
// 	return {
// 		extensions: ['.tsx', '.ts', '.js'],
// 	}
// }

import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}
}
