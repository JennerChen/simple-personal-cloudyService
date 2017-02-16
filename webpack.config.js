const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
// 		vendor:['underscore'],
		app:['babel-polyfill','./src/index.js']
	},
	output: {path: __dirname, filename: './static/js/bundle.js'},
	watch: true,
	devtool: "inline-source-map",
	plugins: [
// 	   new webpack.LoaderOptionsPlugin({
// 				    options: {
// 		      context: __dirname}
// 	   })
// 		new webpack.optimize.CommonsChunkPlugin({
// 			name: "vendor",
// 			minChunks: Infinity,
// 		})
	],
	module: {
		rules: [
			{
				test: [/.jsx?$/, /.js?$/],
				loader: 'babel-loader',
				exclude: 'node_modules',
				query: {
					presets: ['es2015', 'react'],
					plugins: ["transform-regenerator"]
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader'
				]
			}
		]
	}
};