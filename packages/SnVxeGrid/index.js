/*
 * @Description: 组件的暴露口
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-21 15:55:11
 * @LastEditTime: 2022-02-22 16:56:34
 * @LastEditors: Song Shuang Shuang
 */
import SnVxeGrid from './main.vue';

SnVxeGrid.install = (Vue) => {
  Vue.component(SnVxeGrid.name, SnVxeGrid);
};

export default SnVxeGrid;
