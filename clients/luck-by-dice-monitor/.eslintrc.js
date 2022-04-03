const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    project: path.join(thisDir, 'tsconfig.json'),
    tsconfigRootDir: thisDir
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc"
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-inferrable-types":"off",
    "@typescript-eslint/no-use-before-define":"off",
    "@typescript/interface-name-prefix":"off",
    "@typescript-eslint/interface-name-prefix":"off",
    "tsdoc/syntax": "warn"
  }
};
