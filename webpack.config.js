// var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,"static");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR,
		filename: "bundle.js",
		// publicPath: "/dist/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test: /\.css$/,
  				loader: "css-loader"
			}
		]
	}
};

module.exports = config;