import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../../src';

export default {
  title: 'Molecules/Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary = args => <Button {...args}>Run Query</Button>;

Primary.args = {
  color: 'primary',
  variant: 'contained',
};

export const Inherit = args => <Button {...args}>Run Query</Button>;

Inherit.args = {
  color: 'inherit',
  variant: 'contained',
};
