const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/bootstrap.ts'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    root: './src',
    extensions: ['', '.ts', '.js', '.json'],
    modulesDirectories: ['node_modules'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      // typescript loaders
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      // css loaders
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      // html loaders
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
    ])
    // new webpack.optimize.UglifyJsPlugin({ 
    //   minimize: true,
    //   output: { comments: false }
    // })
  ],
  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  },
}

