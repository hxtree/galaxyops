module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-prototype-builtins': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
