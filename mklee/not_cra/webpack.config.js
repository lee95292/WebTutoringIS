var path=require('path');

module.exports={
    entry: './src/index.js',
    output:{
        path:__dirname,
        filename:'./public/[name].bundle.js'
    },
    devServer:{
        index:path.join(__dirname,'public/index.html'),
        host:'localhost',
        contentBase:path.join(__dirname,'public'),
        port:9000
    },
    module:{
        rules:[{
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }]
    }
}