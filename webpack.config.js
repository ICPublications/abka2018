const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: [ 'webpack-hot-middleware/client?reload=true' , './app/scripts/libs/index.js'], //Can also use "main" property
    output: {
        path: path.resolve(__dirname, 'dist'), //resolves the absolute path 
        filename: '[name].bundle.[hash].js', //
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve:{
        alias: {
            components: path.resolve(__dirname, 'app/scripts/components'),
            fonts: path.resolve(__dirname,  'app/scripts/fonts'),
            images: path.resolve(__dirname,  'app/images'),
            sass: path.resolve(__dirname,  'app/styles/sass'),
            css: path.resolve(__dirname,  'app/styles/css')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //to use the CSS imported - in your index.js file you 
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                //: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use:['file-loader']
            },  
            {
                test: /\.(ico)$/,
                loader: 'file-loader?name=[name].[ext]' 
            },          
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
                    
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'African Banker Awards 2018',
            template: './app/scripts/libs/template.ejs',
            inject: 'body'
        }), 
        new CleanWebpackPlugin(['tmp']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
           })
        /* new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }), */
        //new UglifyJsPlugin()
    ]
  };