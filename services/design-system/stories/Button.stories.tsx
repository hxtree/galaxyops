import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Default = args => <Button {...args}>Run Query</Button>;

Default.args = {
  color: 'primary',
  variant: 'contained',
};

export const Secondary = args => <Button {...args}>Run Query</Button>;

Secondary.args = {
  color: 'secondary',
  variant: 'contained',
};
