# @cats-cradle/eslint-config

EslintConfig contains common eslint config settings by profile or to help
simplify app development.

## Getting Started

```javascript
//.eslintrc.js
module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```
