/*
 * @Description: git 提交规范
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-04-14 10:31:41
 * @LastEditTime: 2021-04-27 09:37:30
 * @LastEditors: Shuangshuang Song
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // 新功能
      'fix', // bug修复
      'del', // 删除
      'perf', // 优化相关，如提升性能、用户体验等。
      'style', // 仅仅是对样式或者格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
      'ref', // 代码重构，没有新增功能或修复bug
      'build', // 改变构建流程、或者增加依赖库、工具等。
      'docs', // 文档更新，如readme.md
    ]],
    'subject-min-length': [2, 'always', 6], // 提交内容最少6字
  },
};
