const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({ template: './src/index.html' });

module.exports = [
    {
      mode: 'development',
      entry: './src/index.ts',
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }]
      },
      output: {
        path: __dirname + '/build',
        filename: 'index.js'
      }
    },
    {
        mode: 'development',
        entry: './src/renderer.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
          rules: [{
            test: /\.ts(x?)$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }]
          }]
        },
        output: {
          path: __dirname + '/build',
          filename: 'reactRenderer.js'
        },
        plugins: [
          htmlPlugin  
        ],
        resolve: {
          extensions: ['.ts', '.tsx', '.js']
        }
      },
  ];
