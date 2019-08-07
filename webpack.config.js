const path = require('path');
// 引入模块(插件是作为模块的存在）

// html 文件生成
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// HMR  热模块替换
const webpack = require('webpack');

module.exports = {
    // mode: 'production',
    mode: 'development',
    // 调试器npo
    devtool: 'inline-source-map',
    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot : true
    },
    // entry: './src/index.js',
    entry: {
        //  入口分类
        // 键值为name占位符的名称
        app: './lib/index.js',
        print: './lib/print.js'
    },
    output: {
        // filename: "bunlde.js",
        // name 占位符
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        // 外网路径
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }, {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    optimization: {
      splitChunks: {
          chunks: "all",
          automaticNameDelimiter:"-"
      },
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Output Management",
            filename: "index.html"
        }),
        new webpack.ProvidePlugin({
            _ : 'lodash'
        }),
        // 哈希模块插件
        new webpack.HashedModuleIdsPlugin(),
        // 每次打包清理插件
        new CleanWebpackPlugin(),
        // mainfest 资源映射文件显示生成插件
        new ManifestPlugin(),
        // 名称模块与热部署
        // 名称块，根据相对路径与绝对路径
        new webpack.NamedChunksPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}