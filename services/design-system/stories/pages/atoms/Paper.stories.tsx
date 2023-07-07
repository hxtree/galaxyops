import React from 'react';
import { Meta } from '@storybook/react';
import { Paper, PaperProps } from '../../../src';

export default {
  title: 'Atoms/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default = args => <Paper {...args}>Text</Paper>;

Default.args = {
  elevation: 3,
};
