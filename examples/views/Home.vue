<template>
  <div class="home">
    <SnVxeGrid
      ref="vxeGrid"
      :grid-options="gridOptions"
    />
  </div>
</template>

<script>
// pack is an alias to /packages
import SnVxeGrid from 'pack/SnVxeGrid/main';
import {
  /* getOutputList, */ getOutputMainList, downloadTemp, exportData,
} from 'exam/api';

export default {
  name: 'Home',
  components: { SnVxeGrid },
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        showHeaderOverflow: true,
        showOverflow: true,
        highlightHoverRow: true,
        keepSource: true,
        height: 600,
        id: 'home_table',
        rowId: 'indexCode',
        customConfig: {
          storage: true,
          checkMethod: this.checkColumnMethod,
        },
        sortConfig: {
          trigger: 'cell',
          remote: true,
        },
        filterConfig: {
          remote: true,
        },
        pagerConfig: {
          pageSize: 200000,
          pageSizes: [10, 50, 100, 200, 500, 1000],
        },
        toolbarConfig: {
          buttons: [
            { code: 'download_template', name: '下载模板' },
          ],
          export: true,
          zoom: true,
          custom: true,
        },
        proxyConfig: {
          seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
          // 对应响应结果 { result: [], page: { total: 100 } }
          props: {
            result: 'data.list', // 配置响应结果列表字段
            total: 'data.total', // 配置响应结果总页数字段
          },
          // 只接收Promise，具体实现自由发挥
          ajax: {
            // 当点击工具栏查询按钮或者手动提交指令 query或reload 时会被触发
            query: ({ page }) => {
              const params = {
                pageIndex: page.currentPage,
                pageSize: page.pageSize,
              };
              return getOutputMainList(params);
            },
            // 当点击工具栏下载模板
            download_template: () => this.downloadTemplate(),
          },
        },
        columns: [
          { type: 'checkbox', width: 60 },
          {
            field: 'code', title: '单据编号', sortable: true, titleHelp: { message: '单据编号必须填写！' }, editRender: { name: 'input', attrs: { placeholder: '请输入单据编号' } },
          },
          {
            field: 'status.desc',
            title: '单据状态',
            filters: [
              { label: '待审核', value: 'UNAUDIT' },
              { label: '审核通过', value: 'AUDIT' },
              { label: '重新审核', value: 'REAUDIT' },
              { label: '驳回', value: 'REJECT' },
              { label: '已出库', value: 'STOCKOUT' },
              { label: '已完结', value: 'COMPLETED' },
              { label: '已作废', value: 'INVALID' },
            ],
            filterMultiple: false,
            editRender: { name: '$select', options: [], attrs: { placeholder: '请输入单据状态' } },
          },
          {
            field: 'receivePartyName', title: '收货方', width: 160, editRender: { name: '$input', props: { placeholder: '请输入收货方' } },
          },
          {
            field: 'realQuantity', title: '实际出库数量', visible: false, sortable: true, editRender: { name: '$input', props: { type: 'number', min: 1, max: 120 } },
          },
          {
            field: 'thirdOutboundCode', title: '三方仓出库单号', formatter: this.formatAmount, editRender: { name: '$input', props: { type: 'float', digits: 2, placeholder: '请输入数值' } },
          },
          {
            field: 'createTime', title: '创建时间', width: 160, sortable: true,
          },
        ],
        exportConfig: {
          remote: true,
          exportMethod: this.exportMethod,
          types: ['xlsx'],
          modes: ['current', 'selected', 'all'],
        },
        checkboxConfig: {
          reserve: true,
          highlight: true,
          range: true,
        },
        editRules: {
          code: [
            { required: true, message: 'app.body.valid.rName' },
            { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' },
          ],
          status: [
            { required: true, message: '状态必须填写' },
          ],
          thirdOutboundCode: [
            { required: true, message: '三方仓出库单号必须填写' },
          ],
        },
        editConfig: {
          trigger: 'click',
          mode: 'row',
          showStatus: true,
        },
      },
    };
  },
  mounted() {
    this.findStatusList();
  },
  methods: {
    downloadTemplate() {
      downloadTemp().then((res) => {
        console.log('res', res);
      });
    },
    findStatusList() {
      setTimeout(() => {
        const statusList = [
          { label: '待审核', value: 'UNAUDIT' },
          { label: '审核通过', value: 'AUDIT' },
          { label: '重新审核', value: 'REAUDIT' },
          { label: '驳回', value: 'REJECT' },
          { label: '已出库', value: 'STOCKOUT' },
          { label: '已完结', value: 'COMPLETED' },
          { label: '已作废', value: 'INVALID' },
        ];
        // 异步更新下拉选项
        this.statusList = statusList;
        const $grid = this.$refs.vxeGrid.$refs.grid;
        if ($grid) {
          const statusColumn = $grid.getColumnByField('status.desc');
          statusColumn.editRender.options = statusList;
        }
      }, 100);
    },
    formatAmount({ cellValue }) {
      return cellValue;
    },
    checkColumnMethod({ column }) {
      if (['code'].includes(column.property)) {
        return false;
      }
      return true;
    },
    // 自定义服务端导出
    exportMethod({ options }) {
      debugger;
      const $grid = this.$refs.xGrid;
      const proxyInfo = $grid.getProxyInfo();
      console.log('proxyInfo', proxyInfo);
      console.log('options', options);

      this.$confirm('是否确认导出所有数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        const data = {
          importByItem: true,
        };
        exportData(data).then(res => {
          if (!res.success) return this.$message.error(res.message);
          this.$message.success('您正在创建已选单据的导出任务，任务创建后请在【已导出文件】中查看');
        });
      }).catch(() => {});
    },
  },
};
</script>
