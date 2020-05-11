const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyWebpackPlugin([
    { from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, '.webpack/renderer/static') }
  ])
];
