const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
     mode: 'development',
     entry: {
        app: [
            './src/bundle.js',
            './src/scss/main.scss'
        ]
      },
    output: {
         path: path.resolve(__dirname, '../public/'),
         publicPath: '',
        filename: 'js/[name].js'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
      // ...
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    })
    // ...
    ]
};
