const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
	entry: {
		app:['babel-polyfill','./src/index.js']
	},
	output: {
// 		filename:'[chunkhash].[name].js',
		filename:'[name].js',
		path: path.resolve(__dirname,'static/js'),
	},
	watch: false,
	devtool: false,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor","manifest"],
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory, 把所有node_modules下的文件一律加入类库包
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new ManifestPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false
		})
	],
	module: {
		rules: [
			{
				test: [/.jsx?$/, /.js?$/],
				loader: 'babel-loader',
				exclude: '/node_modules',
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
