<!--
 * @Description: 组件demo
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-05 16:29:27
 * @LastEditTime: 2021-08-05 17:08:02
 * @LastEditors: Shuangshuang Song
-->

<template>
  <div class="demo">
    这是一个 <span>{{ name }}</span>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      name: 'demo',
      message: 'message',
    };
  },
};
</script>

<style lang="less" scoped>
.demo {
  margin: 100px auto;
  span {
    font-size: 50px;
    color: crimson;
    font-family: serif;
  }
}
</style>
