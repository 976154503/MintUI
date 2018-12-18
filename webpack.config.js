const path  = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode:'production',
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=700'
			},
			{
				test: /\.(ttf|eot|svg|woff|wpff2|otf)$/, use: 'url-loader'
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-transform-runtime']
				  }
				}
			},
			{ test: /\.vue/, loader: 'vue-loader' }
		]
	},
	resolve: {
		alias: {
			//"vue$": "vue/dist/vue.js"
		}
	},
	plugins: [
		new htmlWebpackPlugin ({
		template: path.join(__dirname,'./src/index.html'),
		filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	performance: {
		hints: "warning", // 枚举
		maxAssetSize: 30000000, // 整数类型（以字节为单位）
		maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
		assetFilter: function(assetFilename) {
		// 提供资源文件名的断言函数
		return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		}
	}
}