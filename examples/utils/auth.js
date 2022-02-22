/*
 * @Description: auth 认证信息操作
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-22 14:18:55
 * @LastEditTime: 2022-02-22 14:20:42
 * @LastEditors: Song Shuang Shuang
 */
const TOKEN = 'token';

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function setToken(token) {
  return localStorage.setItem(TOKEN, token);
}

export function removeToken() {
  return localStorage.removeItem(TOKEN);
}
