module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-control-regex': 'off',
  },
};
