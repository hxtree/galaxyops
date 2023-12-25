import React from 'react';
import { Meta } from '@storybook/react';
import { PageFooter, PageFooterProps } from '../../../src/main';

export default {
  title: 'Organisms/PageFooter',
  component: PageFooter,
} as Meta<typeof PageFooter>;

export const Default = (args: PageFooterProps) => <PageFooter {...args}></PageFooter>;

Default.args = {
  siteOwner: 'Cat\'s Cradle',
};
