module.exports = {
  extends: ['@galaxyops/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-await-in-loop': 'off',
  },
};
