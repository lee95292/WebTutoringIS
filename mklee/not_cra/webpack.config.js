var path=require('path');

module.exports={
    entry: './src/index.jsx',
    output:{
        path:__dirname,
        filename:'./public/[name].bundle.js'
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