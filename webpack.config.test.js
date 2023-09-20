const path = require('path');
const { VueLoaderPlugin } = require('vue-loader'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dev'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',   // initial、async和all
            minSize: 30000,   // 形成一个新代码块最小的体积
            maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
            maxInitialRequests: 3,   // 最大初始化请求数
            automaticNameDelimiter: '~',   // 打包分割符
            cacheGroups: {
                vendors: { // 项目基本框架等
                    chunks: 'all',
                    test: /(vue|react-router|babel-polyfill)/,
                    priority: 100,
                    name: 'vendors',
                },
                antd: {
                    chunks: 'all',
                    test: /antd/,
                    priority: 120,
                    name: 'antd'
                },
                commons: { // 其他同步加载公共包
                    chunks: 'all',
                    minChunks: 2,
                    name: 'commons',
                    priority: 80,
                },
            }
          },      
    },
    // externals: {
    //     'antd': 'antd'
    // },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(c|le)ss$/, // 正则匹配文件路径
            use: [
                // 注意loader生效是从下往上的
                MiniCssExtractPlugin.loader,
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
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lenovo-brain-design',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
        }),
        new VueLoaderPlugin()
    ]
}
