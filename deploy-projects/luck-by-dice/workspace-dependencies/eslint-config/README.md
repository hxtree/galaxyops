# @cats-cradle/eslint-config

EslintConfig contains common eslint packages and settings organized by profile
to help remove complexity and simplify app development.

## Getting Started

```bash
npm i @cats-cradle/eslint-config
```

For example, all the styling packages and settings for a react app could be set
by:

```javascript
//.eslintrc.js
module.exports = {
  extends: ['@cats-cradle/eslint-config/profile/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```
