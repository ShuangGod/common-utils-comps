/*
 * @Description: 组件的暴露口
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-05 16:28:59
 * @LastEditTime: 2021-08-05 16:51:55
 * @LastEditors: Shuangshuang Song
 */
import Demo from './main.vue';

Demo.install = (Vue) => {
  Vue.component(Demo.name, Demo);
};

export default Demo;
