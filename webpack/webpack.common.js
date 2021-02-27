const Webpack = require('webpack')
const path = require('path')
const WebpackManifest = require('webpack-pwa-manifest')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 1. entry point of our application
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx')
  },
  // 2. we want to see every bits of information that's why verbose
  stats: 'verbose',
  // 3. resolver for identification with the specified files
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss']
  },
  // 4. module
  module: {
    rules: [
      // javascript support
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // css support
      {
        test: /\.(s[ac]ss)$/,
        use: [
          MiniCSSExtractPlugin.loader, // extracting to a file with .css
          "css-loader", // loading css to browser dom
          //sass-loader for compiling sass files to .css
          {
            loader :"sass-loader",
            options: {
              /* in production it will be the same for educational purpose */
              sourceMap: true
            }
          }
        ]
      },
      // images, icons, svgs, gifs support
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/images",
          esModule: false
        }
      },
      // audios, mp3 support
      {
        test: /\.(aac|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/audio",
            esModule: false
          }
        }
      },
      // videos, mp4 support
      {
        test: /\.(webm|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/video",
            esModule: false
          }
        }
      }
    ]
  },
  // 5. Plugins(Very crucial in webpack)
  plugins: [
    // we could have pass progess as an argument within the npm package script
    new Webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
    }),
    // adding manifest as we want our project to be a PWA Web Application
    new WebpackManifest({
      filename: "manifest.json",
      name: 'Md Irshad | Portfolio',
      short_name: 'Portfolio',
      description: 'This protfolio project built using React with Custom Webpack Config',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      publicPath: '/',
      includeDirectory: true,
      icons: [
        {
          src: path.resolve(__dirname, '../public/assets/icon/icons8-external-link-64.png'),
          size: '64x64'
        },
        {
          src: path.resolve(__dirname, '../public/assets/icon/icons8-external-link-128.png'),
          size: '128x128'
        },
        {
          src: path.resolve(__dirname, '../public/assets/icon/icons8-external-link-256.png'),
          size: '256x256'
        },
        {
          src: path.resolve(__dirname, '../public/assets/icon/icons8-external-link-512.png'),
          size: '512x512'
        }
      ]
    }),
    // index.html where we will render everything
    new HtmlWebpackPlugin({
      title: 'Md Irshad | Portfolio',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/assets/favicons/irshad.png'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    // for extracting css to a file
    new MiniCSSExtractPlugin({
      filename: "static/css/[name].css",
    })
  ],
  // 6. Our target is an web please 
  target: 'web'
}