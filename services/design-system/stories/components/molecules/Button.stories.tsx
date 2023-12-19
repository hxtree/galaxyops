import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../../src/main';

export default {
  title: 'Molecules/Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary =  (args: ButtonProps) => <Button {...args}></Button>;

Primary.args = {
  color: 'primary',
  loading: false,
  // argTypes: { onClick: { action: 'clicked' } },
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Another button clicked');
  },
  selected: false,
  children: 'Run Query'
} as ButtonProps;

export const Secondary = (args: ButtonProps) => <Button {...args}>Run Query</Button>;

Secondary.args = {
  color: 'secondary',
  href: "http://example.com"
} as ButtonProps;

export const Loading = (args: ButtonProps) => <Button {...args}>Run Query</Button>;

Loading.args = {
  loading: true,
  color: 'secondary',
  variant: 'contained',
} as ButtonProps;
