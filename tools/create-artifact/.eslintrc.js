module.exports = {
  extends: ['@galaxyops/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'consistent-return': 'off',
  },
};
