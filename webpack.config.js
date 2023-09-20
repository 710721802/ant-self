/*
 * @Author: luxiyuan
 * @Date: 2023-08-07 16:29:20
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-08-23 14:11:56
 * @Description: file content
 * @FilePath: \lenovo-brain-design\webpack.config.js
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        port: 7002,
        overlay: {
            //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        },
        progress: true
    },
    performance: {
        hints: false,
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 0,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(c|le)ss$/, // 正则匹配文件路径
            use: [
                // 注意loader生效是从下往上的
                'style-loader',
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                            // modifyVars: theme,
                            javascriptEnabled: true,
                        }
                    }
                },
                {
                    loader: 'style-resources-loader',
                    options: {
                        patterns: path.resolve(__dirname, './src/assets/css/theme.less')
                    }
                }
            ]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|ttf|eot)$/i,
            type: 'asset/resource',
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lenovo-brain-design',
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'ts'],
        })
    ]
}
