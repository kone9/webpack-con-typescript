const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
    mode:'development',//eleguir si quiero modo desarrollo para poder mirar el código
    //mode:'production',//o modo producción para no ver el código
    devtool: 'eval-source-map',
    entry: './src/Main.ts',
    module:{
        rules:[
            {
                test:/\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname,'src')]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                exclude: /node_modules/ //para exclui la carpeta modules en el compilado
            }
        ]
        
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