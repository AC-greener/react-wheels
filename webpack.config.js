const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //配置模式 开发 或者生产
  mode: 'development',
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
  ],
  //外部的库，不打包
  externals: {
    react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
    },
    'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
    },
}
}