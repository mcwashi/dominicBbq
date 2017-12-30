var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: APP_DIR + '/js/App.jsx',
	
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
	
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
	   query: {
		   presets: ['es2015', 'react'] // use es2015 and react
		}

      },
			{ 
				test: /\.svg$/, 
				loader: 'svg-inline-loader' 
			},
			{
				test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
							name: '[hash].[ext]',
							outputPath: 'images/'
						}  
          }
        ]
			},
		
    ]
  }
};

module.exports = config