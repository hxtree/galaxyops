module.exports = {
  extends: ['@galaxyops/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "sort-keys-fix"
  ],
  rules: {
    "sort-keys-fix/sort-keys-fix": "warn"
  }
}
