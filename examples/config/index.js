/*
 * @Description: 配置编译环境和线上环境之间的切换
 * @Author: Shuangshuang Song
 * @Date: 2021-12-16 15:12:59
 * @LastEditTime: 2022-02-22 16:55:46
 * @LastEditors: Song Shuang Shuang
 */

const runTimeEnv = process.env.NODE_ENV;
const Host = new Map();

// 本地开发环境
Host.set('development', {
  baseUrl: 'https://scm-test.pin-dao.cn',
  inventoryApi: '/distribution-center-inventory/v1', // 大仓api
});

module.exports = Host.get(runTimeEnv);
