/*
 * @Description: 配置文件
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-05 16:22:17
 * @LastEditTime: 2022-02-22 15:33:43
 * @LastEditors: Song Shuang Shuang
 */

const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  devServer: {
    port: 8089,
    hot: true,
    open: true,
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        pack: resolve('packages'),
        exam: resolve('examples'),
      },
    },
  },
  css: {
    extract: false,
  },
};
