import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(htmlPath : string): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: htmlPath
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin()
	]
}