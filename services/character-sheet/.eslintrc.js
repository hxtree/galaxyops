module.exports = {
  extends: ['@galaxyops/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: 'never',
          order: 'alphabetically',
        },
      },
    ],
  },
}
