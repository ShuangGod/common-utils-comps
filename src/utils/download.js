/*
 * @Description: 文件批量下载
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-03-30 11:18:29
 * @LastEditTime: 2021-07-29 16:58:46
 * @LastEditors: Shuangshuang Song
 */
import axios from 'axios';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { Message } from 'element-ui';

/**
 * @name getFile
 * @description: 获取文件流
 * @param {*} url 文件绝对路径
 * @param {*} fileName 文件名
 * @returns {*}
 */
export function getFile(url, fileName) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      timeout: 600000,
      responseType: 'arraybuffer',
      onDownloadProgress(progressEvent) {
        const percent = `${(progressEvent.loaded / progressEvent.total * 100).toFixed(2)}%`;
        console.log(`${fileName} 已下载： ${percent}`);
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

/**
 * @name showError
 * @description: 异常提示
 * @param {*} res 错误消息对象
 * @param {*} item 文件对象
 * @returns {*}
 */
export function showError(res, item) {
  let message = `获取${item.name || '资源文件'}失败！`;
  if (res.message) {
    if (res.message.includes('Network Error')) {
      message = `${item.name || '资源文件'}未找到！`;
    } else if (res.message.includes('timeout') && res.message.includes('exceeded')) {
      message = `获取${item.name || '资源文件'}超时！`;
    }
  }

  Message.error({
    showClose: true,
    message,
    type: 'error',
  });
}

/**
 * @name handleBatchDownload
 * @description: 批量下载文件 并压缩
 * @param {*} files 下的文件集合
 * @param {*} name 压缩后的zip文件名
 * @returns {*}
 */
export function handleBatchDownload(files, name) {
  const zip = new JSZip();
  const cache = {};
  const promises = [];
  files.forEach((item) => {
    const promise = getFile(item.downUrl, item.name).then((data) => { // 下载文件, 并存成ArrayBuffer对象
      const arr_name = item.downUrl.split('/');
      const file_name = arr_name[arr_name.length - 1]; // 获取文件名
      zip.file(file_name, data, { binary: true }); // 逐个添加文件
      cache[file_name] = data;
    }).catch((error) => {
      console.log(error);
      showError(error, item);
    });
    promises.push(promise);
  });
  Promise.all(promises).then(() => {
    console.log('end');
    zip.generateAsync({ type: 'blob' }).then((content) => { // 生成二进制流
      console.log(content);
      FileSaver.saveAs(content, name); // 利用file-saver保存文件
    }).catch((error) => {
      console.log(error);
    });
  });
}
