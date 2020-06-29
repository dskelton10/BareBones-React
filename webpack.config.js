const path = require('path');

module.exports = {
    entry: "./src/index.js", 
    mode: "development",  
    module : {
        rules:[ 
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: '[path][name].[ext]'
                    }
                  },
                ],
              },
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output:{
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true, 
        port:3000,
        publicPath:'http://localhost:3000/dist/'
    }
};