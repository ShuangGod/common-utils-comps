import BackToTop from './index.vue';

BackToTop.install = function (Vue) {
  Vue.component(BackToTop.name, BackToTop);
};

export default BackToTop;
