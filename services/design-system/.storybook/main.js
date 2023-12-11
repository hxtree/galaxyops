var config = {
    stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-styling',
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            propFilter: function (prop) {
                return prop.parent ? !/node_modules\*/.test(prop.parent.fileName) : true;
            },
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        builder: '@storybook/builder-vite',
    },
};
export default config;
