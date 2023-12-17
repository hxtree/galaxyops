const path = require('path');
const { createTransformer } = require('babel-jest');

const transformer = createTransformer({
  presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')],
  babelrc: false,
});

module.exports = {
  process(src, filename, config, options) {
    const result = transformer.process(src, filename, config, options);

    const css = require('sass').renderSync({
      data: result.code,
      includePaths: [path.dirname(filename)],
      outputStyle: 'compressed',
    }).css.toString();

    return `module.exports = ${JSON.stringify(css)};`;
  },
};
