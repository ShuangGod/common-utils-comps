/*
 * @Description: webpack babel 编译配置
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-02 11:16:12
 * @LastEditTime: 2021-08-05 10:48:56
 * @LastEditors: Shuangshuang Song
 */
const path = require('path');
// vue-loader 插件，它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: { // 入口文件
    common: ['./src/index.js'],
  },
  output: { // 输出文件路径设置
    path: path.resolve(__dirname, '../lib'),
    filename: 'common.lib.js',
    library: {
      type: 'commonjs2',
      export: 'default',
    },
  },
  // 插件配置
  plugins: [
    new VueLoaderPlugin(),
  ],
  externals: [{ vue: 'vue' }, nodeExternals()],
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(less|s[ac]ss)$/,
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
