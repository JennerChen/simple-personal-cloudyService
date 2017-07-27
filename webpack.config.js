const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
	entry: {
		app:['babel-polyfill','./src/index.js']
	},
	output: {
		filename: '[name].js',
// 		filename:'[chunkhash].[name].js',
		path: path.resolve(__dirname,'static/js'),
	},
	watch: true,
	devtool: "inline-source-map",
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor","manifest"],
			minChunks: function (module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new ManifestPlugin()
	],
	module: {
		rules: [
			{
				test: [/.jsx?$/, /.js?$/],
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
