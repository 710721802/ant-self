/*
 * @Author: luxiyuan
 * @Date: 2023-04-20 17:03:14
 * @LastEditors: luxiyuan
 * @LastEditTime: 2023-08-23 15:15:37
 * @Description: file content
 * @FilePath: \lenovo-brain-design\webpack.config.prod.js
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/components/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        library: {
            name: 'LenovoBrainDesign',
            type: 'umd'
        }
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        // splitChunks: {
        //     chunks: 'all',   // initial、async和all
        //     minSize: 30000,   // 形成一个新代码块最小的体积
        // },      
    },
    externals: {
        'antd': 'antd',
        'vue': 'vue'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(c|le)ss$/, // 正则匹配文件路径
            use: [
                // 注意loader生效是从下往上的
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                            // modifyVars: theme,
                            javascriptEnabled: true,
                        },
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
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|ttf|eot)$/i,
            type: 'asset/resource',
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new VueLoaderPlugin()
    ]
}
