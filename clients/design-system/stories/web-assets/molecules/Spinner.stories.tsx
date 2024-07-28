import React from 'react';
import { Meta } from '@storybook/react';
import { Spinner } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

export const Default = args => <Spinner {...args} />;

Default.args = {
  color: 'primary',
};
