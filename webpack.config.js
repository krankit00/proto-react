var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 mode: 'development',
 module: {
  rules: [
    {
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        use: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/react']
                }
            }
        ],
    },
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.html$/, use: 'html' },
  {test: /\.(gif|png)$/, use: 'url-loader'}
]
 }
}