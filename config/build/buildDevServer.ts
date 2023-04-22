import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(htmlPath : string, port: number): DevServerConfiguration {
	return {
		static: htmlPath,
		port,
		open: true,
		historyApiFallback: true,
	}
}