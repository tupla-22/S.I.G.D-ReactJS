const { CleanWebpackPlugin } =  require('clean-webpack-plugin') ;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
    entry:"./src/index.js",
    output: {
        filname:"bundle.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    mode: 'production',
    module: {
        rules:
        [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                   extensions: ['.js','.jsx']
               }
            },
            {
                test: /\.css$/,
                use:['style-loader','use-loader'],
            }
        
        ]
    },
    plugins: [CleanWebpackPlugin(), new HtmlWebpackPlugin(
        {
            template:'./public/index.html',
        }
    )]
}