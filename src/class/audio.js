/*
 * @Description: 音频处理 js
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-07-12 11:11:45
 * @LastEditTime: 2021-07-30 14:44:34
 * @LastEditors: Shuangshuang Song
 */

import axios from 'axios';

/**
 * @description: 获取音频 arraybuffer 格式流
 * @param {*} url 绝对地址
 * @returns {Promise}
 */
const getArraybuffer = (url) => axios({
  method: 'get',
  url,
  responseType: 'arraybuffer',
});

// 定义音频类
class Audiojs {
  constructor() {
    this._init();
  }

  async play(url) {
    if (!this.audioContext) {
      this._init();
    }
    if (!this.audioContext) {
      return console.error('该浏览器不支持webAudioApi相关接口');
    }
    // 有播放中的音频 先暂停
    if (this.playStatus === 'play') {
      this.stop();
    }

    const data = await getArraybuffer(url);
    this.audioContext.decodeAudioData(data.data).then((decodedData) => {
      const bufferSource = this.bufferSource = this.audioContext.createBufferSource();
      bufferSource.buffer = decodedData;
      bufferSource.connect(this.audioContext.destination);
      bufferSource.start();
      this.setStatus('play');

      bufferSource.onended = () => {
        if (this.playStatus !== 'play') {
          return;
        }
        this.stop();
      };
    });
  }

  stop() {
    this.setStatus('endPlay');
    if (this.bufferSource) {
      try {
        this.bufferSource.stop();
      } catch (e) {
        console.log(e);
      }
    }
  }

  // 修改录音播放状态
  setStatus(status) {
    this.playStatus = status;
  }

  _init() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioContext = new AudioContext();
    }
  }
}

export default Audiojs;
