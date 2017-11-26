var path = require('path');


module.exports = {
  devtool:'source-map',
 module: {
   loaders: [{
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loader: 'babel'
   }],
  rules: [
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
       {
         test: /\.css$/,
         loader: 'css-loader',
         query:{
           importLoaders: 1,
           modules: true,
           localIdentName: "[name]__[local]___[hash:base64:5]"
         }
       },
       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  entry: {
        login: "./src/Login/LoginView.js",

    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    }

};
