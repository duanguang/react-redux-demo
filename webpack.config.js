"use strict";
/**
 * Created by XD on 2016/7/12.
 */
var path = require('path');
var webpack = require('webpack');
var dominSite_config_1 = require('./dominSite.config');
module.exports = {
    //是否使用缓存
    cache: true,
    //是否使用sourcemap
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?' + dominSite_config_1.hotReloadServerUri,
        'webpack/hot/only-dev-server',
        dominSite_config_1.compilePath
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: "/static/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|typings)/,
                include: /client/,
                loader: 'react-hot'
            },
            {
                test: /\.less/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /ts\-helpers/,
                loader: 'imports?this=>window'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ],
        noParse: [],
    },
    resolve: {
        extensions: ['', '.js', 'ts', '.tsx'],
        alias: {
            "ts-helpers": path.join(__dirname, 'client/common/externals/ts-helpers')
        }
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            __extends: 'ts-helpers'
        }),
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ]
};
