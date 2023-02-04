# @cats-cradle/eslint-config

EslintConfig contains common eslint config settings by profile to help simply
app development.

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
