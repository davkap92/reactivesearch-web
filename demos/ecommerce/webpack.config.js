const path = require("path");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: {
		main: "./index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		publicPath: "dist/"
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /.jpg$/,
				loader: "url-loader",
				options: {
					limit: 8000
				},
				exclude: /node_modules/
			}
		]
	}
};
