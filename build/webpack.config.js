/*
 * @Description: webpack babel 编译配置
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-02 11:16:12
 * @LastEditTime: 2021-08-04 15:44:33
 * @LastEditors: Shuangshuang Song
 */
const path = require('path');
// vue-loader 插件，它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ['./src/index.js'], // 入口文件
  output: { // 输出文件路径设置
    path: path.resolve(__dirname, '../bin'),
    filename: 'index.js',
  },
  // 插件配置
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(less|s[ac]ss)$/,
        exclude: /node_modules/,
        use: [
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'less-loader' },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
