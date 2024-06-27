# @galaxyops/eslint-config

EslintConfig contains common eslint packages and settings organized by profile
to help simplify app development by isolating linting complexity.

## Getting Started

```bash
npm i @galaxyops/eslint-config
```

For example, all the styling packages and settings for a react app could be set
by:

```javascript
//.eslintrc.js
module.exports = {
  extends: ['@galaxyops/eslint-config/profile/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```
