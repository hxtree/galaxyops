import React from 'react';
import { Meta } from '@storybook/react';
import { ApiClient, ApiClientProps } from '../../../src/ApiClient';

export default {
  title: 'Organisms/ApiClient',
  component: ApiClient,
} as Meta<typeof ApiClient>;

export const Example = args => <ApiClient {...args} />;

Example.args = {
  title: 'Try out the route action',
  description:
    'Select an endpoint and run query to see an API response using a sample route request.',
  options: [
    {
      label: 'Github Events',
      displayUrl: 'https://api.github.com/events',
      endpoint: 'https://api.github.com/events',
    },
    {
      label: 'Github User',
      displayUrl: 'https://api.github.com/user',
      endpoint: 'https://api.github.com/user',
    },
  ],
  submitLabel: 'Run Query',
};
