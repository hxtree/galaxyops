const tsNode = require('ts-node');
const tsConfigPaths = require('tsconfig-paths');

module.exports = function (opts) {
  tsConfigPaths.register();
  return tsNode.register(opts);
};
