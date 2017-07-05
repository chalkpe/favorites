const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new ExtractTextPlugin('bundle.css'),

  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: { warnings: false }
  }),

  new webpack.LoaderOptionsPlugin({ minimize: true })
]

const loaders = {
  html: 'pug-loader',

  css: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: 'css-loader'
  }),

  scss: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader']
  }),

  sass: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader?indentedSyntax']
  })
}

const rules = [
  {
    test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
    loader: 'file-loader',
    options: { name: '[name].[ext]?[hash]' }
  },

  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },

  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: { loaders }
  },

  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },

  {
    test: /\.s[ac]ss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
  }
]

const alias = {
  vue$: 'vue/dist/vue.common.js'
}

module.exports = {
  entry: './app/app.js',

  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins,
  module: { rules },
  resolve: { alias }
}
