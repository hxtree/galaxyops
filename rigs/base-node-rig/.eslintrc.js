// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@rushstack/eslint-config/profile/node'],
  parserOptions: {tsconfigRootDir: __dirname},
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {'jest/globals': true},
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
