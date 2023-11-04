// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
  },
  root: true,
};
