/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin-next')

const { NODE_ENV = 'production' } = process.env


module.exports = {
  entry: './src/server.ts',
  mode: NODE_ENV,
  target:'node',
  devtool: 'source-map',
  externals:[nodeExternals()],
  watch:NODE_ENV == 'development',
  optimization: {
    usedExports: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: [NODE_ENV == 'development' ? 'yarn run:dev' : 'pm2 start build/main.js'],
        blocking:false,
        parallel:true
      }
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['.ts', '.js'],
      exclude: 'node_modules'
    })
  ]
};