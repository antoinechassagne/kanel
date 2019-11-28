module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'spaced-comment': 0,
    'no-plusplus': 0,
    'eslint-disable no-use-before-define': 0,
    'comma-dangle': 0,
    'import/extensions': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
