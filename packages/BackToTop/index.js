/*
 * @Description: 组件的暴露口
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-05 16:28:59
 * @LastEditTime: 2021-08-05 16:52:02
 * @LastEditors: Shuangshuang Song
 */
import BackToTop from './main.vue';

BackToTop.install = (Vue) => {
  Vue.component(BackToTop.name, BackToTop);
};

export default BackToTop;
