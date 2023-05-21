import webpack  from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";


const config = (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		html: path.resolve(__dirname, 'public', 'index.html'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		src: path.resolve(__dirname, 'src'),
	}
	const PORT = env.port || 3000;
	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT
	})
};

export default config;
