/**
 * Created by DuanG on 2016/7/14.
 */
/**
 * Created by XD on 2016/7/12.
 */
import path=require('path');
import webpack=require('webpack');
import {compilePath,hotReloadServerUri} from './dominSite.config';

module.exports={
    //是否使用缓存
    cache: true,

    //是否使用sourcemap
    devtool: 'source-map',

    entry:[
        'webpack-dev-server/client?' + hotReloadServerUri, // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        compilePath
    ],

    output:{
        path:__dirname,
        filename:'[name].js',
        publicPath:"/static/"
    },

    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/(node_modules|typings)/,
                include:/client/,
                loader:'react-hot'
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
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.ProvidePlugin({
            __extends: 'ts-helpers'
        })
    ]
};