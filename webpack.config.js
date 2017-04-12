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
// 		filename: './static/js/bundle.js'
	},
	watch: true,
	devtool: "inline-source-map",
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor","manifest"],
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory, 把所有node_modules下的文件一律加入类库包
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
				exclude: 'node_modules',
				query: {
					presets: [
						["es2015", { "loose": true }],
						"stage-1",
						'react'
					],
					plugins: [
						"transform-regenerator",
						"add-module-exports",
						"transform-es2015-modules-commonjs",
						"transform-decorators-legacy"
					]
				}
			},
			{
				test: [/\.pcss/,/\.css/],
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader'
				]
			},{
				test:[/\.less/],
				use:[
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	}
};
