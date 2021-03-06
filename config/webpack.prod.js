const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.css$/,
				use:
			[
				'style-loader',
				'css-loader',
			],
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'img/',
						name: '[name].[ext]',
					},
				}],
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'fonts/',
						name: '[name].[ext]',
					},
				}],
			},
			{
				test: /\.txt$/,
				use: 'raw-loader',
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			inject: true,
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
	],
	resolve: {
		extensions: [
			'.js',
			'.jsx',
		],
	},
};
