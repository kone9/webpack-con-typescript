const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
    entry: './src/Main.ts',
    module:{
        rules:[{
            test:/\.ts$/,
            use: 'ts-loader',
            include:[path.resolve(__dirname,'src')]
        }]
    },
    output:{
        publicPath:'public',
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    resolve: {
         extensions: ['.tsx', '.ts', '.js'] 
    },
    
    plugins: [new htmlWebpackPlugin({//copia el archivo html a la carpeta donde estan compilados los archivos
        template: './src/index.html',
    })],

}