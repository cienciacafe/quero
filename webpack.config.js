const path = require('path')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ReactRefreshPlugin = require('react-refresh-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

const config = {
  devtool: devMode ? 'inline-source-map' : 'source-map',
  mode: devMode ? 'development' : 'production',
  context: __dirname,
  entry: {
    polyfill: ['@babel/polyfill'],
    app: ['./app/index']
  },
  devServer: {
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: devMode ? '[name].cafe.js' : '[name].[hash].cafe.js'
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(devMode ? 'development' : 'production')
      },
      'require.specified': 'require.resolve',
      VERSION: JSON.stringify(require('./package.json').version)
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /pt-br/),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      favicon: 'assets/img/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].ps.css' : '[name].[hash].ps.css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'app'),
        exclude: [/(node_modules)/]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
              modifyVars: {
                'heading-color': 'inherit',
                'font-family':
                '"Noto Sans",Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
                'primary-color': '#E04854',
                'link-color': '#E04854',
                'layout-header-background': '#FAFAFA',
                'border-radius-base': '3px'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: '10000',
              mimetype: 'application/octet-stream',
              name: '[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|com|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: '10000',
              mimetype: 'application/octet-stream',
              name: '[hash].[ext]'
            }
          }
        ]
      },
    ]
  },
  resolve: {
    modules: [
      __dirname,
      `${__dirname}/./node_modules`,
      `${__dirname}/assets`,
      `${__dirname}/assets/vendor`,
      `${__dirname}/assets/styles`
    ],
    alias: {
      ['~']: path.resolve(__dirname + '/app')
    }
  }
}

if (devMode) {
  // config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshPlugin({ disableRefreshCheck: false }))
  config.module.rules.push({
    test: /BabelDetectComponent\.js/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [require.resolve('react-refresh/babel')],
        },
      },
    ],
  })
}

module.exports = config
