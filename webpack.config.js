
module.exports={
    entry:__dirname+"/src/js/root.js",
    devtool:"source-map",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    module: {
        loaders: [
            {
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "es2015",
                        "react"
                    ],
                    plugins: [ "transform-runtime",["import", { libraryName: "antd", style: "css" }]]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }


        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}
