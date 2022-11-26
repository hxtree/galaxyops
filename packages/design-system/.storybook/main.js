module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],

  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
