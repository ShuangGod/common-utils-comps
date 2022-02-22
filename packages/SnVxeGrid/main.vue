<!--
 * @Description: 表格组件
 * @Author: Song Shuang Shuang
 * @Date: 2022-02-21 15:58:11
 * @LastEditTime: 2022-02-22 16:23:02
 * @LastEditors: Song Shuang Shuang
-->
<template>
  <vxe-grid
    ref="grid"
    v-bind="getGridOptions"
  />
</template>

<script>
import Vue from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';

import 'vxe-table/lib/style.css';

Vue.use(VXETable);

export default {
  name: 'SnVxeGrid',
  props: {
    gridOptions: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getGridOptions() {
      return this.gridOptions;
    },
  },
  methods: {
  },
};
</script>
