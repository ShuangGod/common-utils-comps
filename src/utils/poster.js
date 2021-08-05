/*
 * @Description: 生成海报、保存到本地等相关方法
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-05-12 09:28:08
 * @LastEditTime: 2021-07-29 16:41:11
 * @LastEditors: Shuangshuang Song
 */
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

/**
 * @name createPoster
 * @description: 生成海报
 * @param {*} dom 要生成海报的dom元素
 * @param {*} opt 自定义配置
 * @returns {*}
 */
export function createPoster(dom, opt = {}) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const scale = opt.scale || 2; // 缩放倍数

  canvas.width = (opt.width || 375) * scale;
  canvas.height = (opt.height || 600) * scale;

  context.scale(scale, scale);

  const options = {
    dpi: window.devicePixelRatio * scale,
    scale, // 添加的scale 参数
    canvas, // 自定义 canvas
    allowTaint: true,
    foreignObjectRendering: true,
    useCORS: true,
    backgroundColor: null,
    x: 0,
    y: 0,
    scrollY: 0,
    scrollX: 0,
    ...opt,
  };
  return new Promise((resolve) => {
    html2canvas(dom, options).then((cvs) => {
      resolve(cvs);
    });
  });
}

/**
 * @name saveAsFile
 * @description: 根据地址保存成附件
 * @param {*} url 资源地址
 * @returns {*}
 */
export function saveAsFile(url) {
  saveAs(url);
}
