import Vue from 'vue';
import ElementUI from 'element-ui';
import Demo from '@/Demo';
import App from './App.vue';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Demo);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});
