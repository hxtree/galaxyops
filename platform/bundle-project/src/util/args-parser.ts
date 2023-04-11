import yargs from 'yargs';

const argsParserPromise = yargs(process.argv.slice(2)).options({
  outDir: {
    description: 'Target package name or path',
    type: 'string',
    default: 'bundled',
  },
  overwrite: {
    description: 'Overwrite output directory',
    type: 'boolean',
    default: true,
  },
}).argv;

export { argsParserPromise };
