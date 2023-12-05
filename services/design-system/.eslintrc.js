module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['<tsconfigRootDir>/.storybook/main.ts', './vite.config.ts'],
};
