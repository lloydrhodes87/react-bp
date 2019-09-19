

module.exports = {
    entry: './src/app.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: `${__dirname}/node_modules`
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: `${__dirname}/public`
    }
};