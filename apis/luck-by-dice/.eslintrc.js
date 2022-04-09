const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  root: true,
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc"
  ],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(thisDir, 'tsconfig.json'),
    tsconfigRootDir: thisDir
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module",
    project: './tsconfig.json'
  },
  rules: {
    "@typescript-eslint/no-inferrable-types":"off",
    "@typescript-eslint/no-use-before-define":"off",
    "@typescript/interface-name-prefix":"off",
    "@typescript-eslint/interface-name-prefix":"off",
    "tsdoc/syntax": "warn"
  }
};
