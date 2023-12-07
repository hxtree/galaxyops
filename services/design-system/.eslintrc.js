module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['<tsconfigRootDir>/.storybook/main.ts', './vite.config.ts'],

  rules: {
    "import/extensions": [
       "error",
       "ignorePackages",
       {
         "js": "never",
         "jsx": "never",
         "ts": "never",
         "tsx": "never"
       }
    ]
 }
};
