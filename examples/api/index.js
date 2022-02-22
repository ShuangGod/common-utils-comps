/*
 * @Description: 接口
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-22 15:28:07
 * @LastEditTime: 2022-02-22 15:36:11
 * @LastEditors: Song Shuang Shuang
 */

import request from 'exam/utils/request';
import { inventoryApi } from 'exam/config';

/**
 * @description: 获取出库含明细列表
 * @param {*} data
 */
export function getOutputList(data) {
  return request({
    url: `${inventoryApi}/outboundOrder/page`,
    method: 'post',
    data,
  });
}

/**
 * @description: 获取出库不含明细列表
 * @param {*} data
 */
export function getOutputMainList(data) {
  return request({
    url: `${inventoryApi}/outboundOrder/pageOutBoundOrderList`,
    method: 'post',
    data,
  });
}

/**
 * @description: 导出出库单
 * @param {*} data
 */
export function exportData(data) {
  return request({
    url: `${inventoryApi}/outboundOrder/export`,
    method: 'post',
    data,
  });
}

/**
 * @description: 下载出库单模板
 */
export function downloadTemp() {
  return request({
    url: `${inventoryApi}/outboundOrder/importTemplate`,
    method: 'get',
    responseType: 'blob',
  });
}


export default {
  getOutputList,
  getOutputMainList,
  exportData,
  downloadTemp,
};
