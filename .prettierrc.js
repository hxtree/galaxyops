module.exports = {
  printWidth: 80,
  arrowParens: 'avoid',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  proseWrap: 'always',
  overrides: [
    {
      files: '**/*.md',
      options: { parser: 'markdown' },
    },
  ],
};