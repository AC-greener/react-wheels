const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    //操作系统路径的表示方式不同, path.resolve会根据操作系统的不同，吧当前目录和dist目录连接起来
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'FUI',
    //统一模块定义 umd, 统一(兼容)了commjs和 amd
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]

}