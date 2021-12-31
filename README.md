# common-utils-comps

公共的类、指令、方法和组件(默认仅支持vue2项目, vue3请使用vue3分支)

## 开发

``` javascript
npm install

// 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org
```

### 本地验证

``` javascript
npm run dev
```

### 编译

``` javascript
npm run lib
```

### Lints and fixes files

``` javascript
npm run lint
```

## 使用

``` javascript
npm i common-utils-comps --save
```

### 全局引入 main.js中

``` javascript
import Common from 'common-utils-comps'

Vue.use(Common); // 全局注入公共组件
Common.initGlobal('Name'); // 注册全局对象Name(挂到window对象下的) 带有所有的公共方法 （Name请自行定义，注意不要与其他全局变量冲突）
```

### 页面使用

``` javascript
// 组件
<template>
  <BackToTop></BackToTop>
</template>
// 方法
Name.isArray(); // Name 对应main.js中initGlobal函数参数的定义
// class 类
import { Audiojs } from 'common-utils-comps';
const audio = new Audiojs();

audio.play('url');
```
