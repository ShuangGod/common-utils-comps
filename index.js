/*
 * @Description: 入口
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-07-29 15:19:09
 * @LastEditTime: 2021-07-30 16:05:56
 * @LastEditors: Shuangshuang Song
*/

import BackToTop from './src/components/BackToTop/index.js';
import {
  handleClipboard, parseTime, formatTime, getQueryObject, byteLength, cleanArray, json2param, param2Json, html2Text, objectMerge,
  toggleClass, getTime, debounce, deepClone, uniqueArr, createUniqueString, hasClass, addClass, removeClass, deleteOneOfArray,
  dataURLtoFile, getBase64Image, createQRcode, isString, isArray, common, isEmpty, isMobileUserAgent, getPageHeight, getPageWidth,
  isWeixin, isAndroid,
} from './src/utils';
import { getToken, setToken, removeToken } from './src/utils/auth';
import { getFile, handleBatchDownload } from './src/utils/download';
import { createPoster, saveAsFile } from './src/utils/poster';
import scrollTo from './src/utils/scroll-to';
import {
  isExternal, validURL, validLowerCase, validUpperCase, validAlphabets, validEmail,
} from './src/utils/validate';
import Audiojs from './src/class/audio';
import Print from './src/class/print';

const components = [
  BackToTop,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 所有常用方法
const SSS = {
  handleClipboard,
  parseTime,
  formatTime,
  getQueryObject,
  byteLength,
  cleanArray,
  json2param,
  param2Json,
  html2Text,
  objectMerge,
  toggleClass,
  getTime,
  debounce,
  deepClone,
  uniqueArr,
  createUniqueString,
  hasClass,
  addClass,
  removeClass,
  deleteOneOfArray,
  dataURLtoFile,
  getBase64Image,
  createQRcode,
  isString,
  isArray,
  common,
  isEmpty,
  isMobileUserAgent,
  getPageHeight,
  getPageWidth,
  isWeixin,
  isAndroid,
  getToken,
  setToken,
  removeToken,
  getFile,
  handleBatchDownload,
  createPoster,
  saveAsFile,
  scrollTo,
  isExternal,
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validEmail,
};

// 把方法挂全局
const initGlobal = (name) => {
  const globalName = name || 'SSS';
  if (typeof window !== 'undefined') {
    window[globalName] = SSS;
  }
};

export default {
  version: '1.0.0',
  install, // 用于Vue.use 全局注册组件
  BackToTop, // 组件
  initGlobal, // 注入全局方法
  SSS, // 方法集合
  Audiojs, // 音频类
  Print, // 打印类
};
