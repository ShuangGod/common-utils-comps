/*
 * @Description: 路由
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-21 16:31:00
 * @LastEditTime: 2022-02-22 15:07:27
 * @LastEditors: Song Shuang Shuang
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import qs from 'query-string';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '../store';

import Home from '../views/Home.vue';

NProgress.configure({
  showSpinner: false,
});

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

// 路由守卫钩子
router.beforeEach((to, from, next) => {
  NProgress.start();

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = `Common-${to.meta.title}`;
  }

  // handle url take token
  if (to.query.token) {
    // 保存token。
    store.dispatch('storeToken', to.query.token);

    delete to.query.token;
    console.log('window', window);
    console.log('top', top);
    console.log('==', window !== top);
    if (window !== top) {
      // 处理路径后的参数
      const url = qs.parseUrl(window.location.origin + to.path);
      url.query = to.query;
      top.location.href = qs.stringifyUrl(url);
      return;
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
