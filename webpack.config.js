import { resolve } from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import config from './.gulp/config'
import TerserPlugin from 'terser-webpack-plugin'

module.exports = {
    mode: config.webpack.mode ? 'development' : 'production',
    entry: config.webpack.entry,
    output: {
        path: resolve(__dirname, config.webpack.output),
        filename: config.webpack.mode
            ? 'js/[name].js'
            : 'js/[name].[contenthash].js',
        chunkFilename: config.webpack.mode
            ? 'js/[name].js'
            : 'js/[name].[contenthash].js'
    },
    stats: 'minimal',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
        alias: {
            '@': resolve(__dirname, 'src'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@patterns': resolve(__dirname, 'src/patterns'),
            '@atoms': resolve(__dirname, 'src/patterns/01-atoms'),
            '@partials': resolve(__dirname, 'src/patterns/02-partials'),
            '@components': resolve(__dirname, 'src/patterns/03-components'),
            '@containers': resolve(__dirname, 'src/patterns/04-containers'),
            '@layouts': resolve(__dirname, 'src/patterns/05-layouts'),
            '@elements': resolve(__dirname, 'src/elements'),
            '@utilities': resolve(__dirname, 'src/utilities'),
            '@config': resolve(__dirname, 'src/config')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styles.scss$/,
                use: [
                    config.webpack.mode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.module.scss$/,
                use: [
                    config.webpack.mode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-modules-typescript-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: config.webpack.mode ? 'inline-source-map' : false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: config.webpack.mode
                ? 'css/[name].css'
                : 'css/[name].[contenthash].css',
            chunkFilename: config.webpack.mode
                ? 'css/[name].css'
                : 'css/[name].[contenthash].css'
        })
    ],
    optimization: {
        minimize: !config.webpack.mode,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        runtimeChunk: 'single'
    }
}
