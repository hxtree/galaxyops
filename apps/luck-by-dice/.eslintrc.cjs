const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  extends: [
  ],
  ignorePatterns: ["cdk.out/*"],
  parserOptions: {
    project: path.join(thisDir, 'tsconfig.json'),
    tsconfigRootDir: thisDir,
  }
};
