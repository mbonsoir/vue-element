/**
 * Created by admin on 2018/4/17.
 */
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const extractTextWebpackPlugin= require('extract-text-webpack-plugin')
const autoprefixer = require("autoprefixer")
const copyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    devtool:"inline-source-map",
    entry:{
        main:'./src/main.js'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.js/,
                exclude: /(node_modules)/,
                use:['babel-loader']
            },
            {
              test:/\.(js|vue)/,
              loader: 'eslint-loader',
              options: {
                  formatter: require('eslint-friendly-formatter')
              }
            },
            {
                test:/\.(css|less)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",'postcss-loader','less-loader']
                })
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test:/\.(scss|sass)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            },
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new extractTextWebpackPlugin("[name].[hash].css"),
        new htmlWebpackPlugin({
            template: 'index.html',
            title:'zhengbingjian',
            minify:{
                removeAttributeQuotes: true,
                // 去除注释
                removeComments:true,
                // 去除换行跟空格
                collapseWhitespace:true,
                drop_debugger: true,
                drop_console: true
            },
            cache:false,
        })
    ],
    devServer:{
        port: 8089,
        contentBase: path.resolve(__dirname,'/dist/'),
        noInfo: true,
        overlay: true
    }
}
if(process.env.NODE_ENV === 'production'){
    module.exports.devtool = 'source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new cleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin(),
        new copyWebpackPlugin([
            {
                from:__dirname+'/assets',
                to:__dirname+'/dist/assets'
            }
        ])
    ])
}