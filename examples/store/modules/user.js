/*
 * @Description: 用户信息
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-22 14:26:14
 * @LastEditTime: 2022-02-22 14:37:49
 * @LastEditors: Song Shuang Shuang
 */
import { getToken, setToken, removeToken } from '../../utils/auth';

const user = {
  state: {
    token: getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    // 保存token
    storeToken({ commit }, token) {
      return new Promise(resolve => {
        setToken(token);
        commit('SET_TOKEN', token);
        resolve();
      });
    },
    // 前端登出: 清空浏览器缓存
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken();
        commit('SET_TOKEN', '');
        resolve();
      });
    },
  },
};

export default user;
