/*
* @Description: main
* @Author: Song Shuang Shuang
* @Date: 2021-12-31 17:09:21
 * @LastEditTime: 2022-02-22 14:25:20
 * @LastEditors: Song Shuang Shuang
*/
import Vue from 'vue';
import ElementUI from 'element-ui';
import Cookies from 'js-cookie';
import router from './router';
import store from './store';
import App from './App.vue';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
