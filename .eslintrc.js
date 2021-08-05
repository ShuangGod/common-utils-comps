/*
 * @Description: eslint 规则
 * @version: V1.0.0
 * @Author: Shuangshuang Song
 * @Date: 2021-08-05 16:17:44
 * @LastEditTime: 2021-08-05 17:33:19
 * @LastEditors: Shuangshuang Song
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: 0,
    semi: ['error', 'always'],
    'import/extensions': ['off'],
    'import/no-duplicates': ['off'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 0,
    'no-var': 'error',
    'no-restricted-syntax': 0,
    'no-prototype-builtins': 0,
    'no-extend-native': 0,
    'no-underscore-dangle': 0,
    'no-bitwise': 0,
    'no-mixed-operators': 0,
    'no-eval': 0,
    'no-plusplus': 0,
    'no-case-declarations': 0,
    'no-useless-escape': 0,
    'no-param-reassign': 0,
    'guard-for-in': 0,
    'max-len': [2, { code: 200 }],
    'no-unused-expressions': 0,
    eqeqeq: 0,
    'no-multi-assign': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'default-case': 0,
    'valid-jsdoc': 0, // 禁用jsdoc规则
    'vue/no-v-html': 0,
    'global-require': 0,
    'no-nested-ternary': 0,
    'linebreak-style': ['off', 'windows'],
    radix: 0,
    'prefer-destructuring': 0,
    'array-callback-return': 0,
    'func-names': 0,
    'no-console': 0,
    'max-len': 0,
    'no-restricted-properties': 0,
    'import/no-cycle': 0,
    'no-shadow': 0,
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'new-cap': 0,
    'prefer-spread': 0,
    'vue/no-template-shadow': 0,
    'class-methods-use-this': 0,
    'no-new': 0,
    'no-dupe-keys': 0,
  },
};
