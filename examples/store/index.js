/*
 * @Description: vuex 状态管理
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-22 14:26:14
 * @LastEditTime: 2022-02-22 14:39:01
 * @LastEditors: Song Shuang Shuang
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'; // 持久化vuex
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: [/* 'user' */], // 按需，哪里需要，在这里添加
    }),
  ],
});

export default store;
