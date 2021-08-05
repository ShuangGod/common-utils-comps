/*
 * @Description: webpack babel 编译配置
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-02 11:16:12
 * @LastEditTime: 2021-08-05 14:10:28
 * @LastEditors: Shuangshuang Song
 */
const path = require('path');
// vue-loader 插件，它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: { // 入口文件
    common: ['./src/index.js'],
  },
  output: { // 输出文件路径设置
    path: path.resolve(__dirname, '../lib'),
    filename: 'common.lib.js',
    library: {
      type: 'umd',
      export: 'default',
      umdNamedDefine: true,
    },
  },
  // 插件配置
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除文件
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less|s[ac]ss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
