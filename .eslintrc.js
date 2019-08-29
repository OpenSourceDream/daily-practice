module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // 禁止使用拖尾逗号，结束时不应该有逗号
    'comma-dangle': ['error', 'never'],
    'vue/require-default-prop': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
