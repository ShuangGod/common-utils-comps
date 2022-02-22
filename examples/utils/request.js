import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import qs from 'query-string';
import store from 'exam/store';
import { baseUrl } from 'exam/config'; // 服务地址
import { getToken } from './auth';

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // 超时
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// request拦截器
service.interceptors.request.use(
  config => {
    const { headers = {} } = config;
    // 是否需要设置 token
    const isToken = headers.isToken === false;
    if (getToken() && !isToken) {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

/**
 * @description: 跳转到sso认证中心
 * @param {*}
 * @return {*}
 */
function goToSso(data) {
  // 跳转地址的url参数修改成当前路由地址，以便认证成功后回跳当前路径
  const pathname = data.action;
  const url = qs.parseUrl(pathname);
  url.query = {
    sysName: data.sysName,
    redirectUrl: window.location.href,
  };
  // 跳转到认证中心
  window.location.href = qs.stringifyUrl(url);
}

// 响应拦截器
service.interceptors.response.use(
  res => {
    const { data = {} } = res;
    const { code } = data;

    if (code == 200 || code == 0 || code?.toString().startsWith(8)) {
      return data;
    }
    // token不存在或者失效，跳转认证中心
    if (code === 303) {
      if (!getToken()) {
        // 跳转到认证中心
        store.dispatch('FedLogOut').then(() => {
          // 跳转到认证中心
          goToSso(data.data);
        });
      } else {
        MessageBox.confirm('登录状态已过期，请重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          type: 'warning',
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            // 跳转到认证中心
            goToSso(data.data);
          });
        }).catch(() => {});
      }
      return;
    }
    // 登出，重定向到sso
    if (code === 302) {
      store.dispatch('FedLogOut').then(() => {
        // 跳转到认证中心
        goToSso(data.data);
      });
      return;
    }

    // 错误处理
    Message({
      message: data.message || data.msg || 'Error',
      type: 'error',
      duration: 5 * 1000,
    });

    return Promise.reject(new Error(data.message || data.msg || 'Error'));
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });

    return Promise.reject(error.message);
  },
);

export default service;
