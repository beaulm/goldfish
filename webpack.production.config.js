path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'./components/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	]
}