import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../../src/main';

export default {
  title: 'Molecules/Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary =  (args: ButtonProps) => <Button {...args}></Button>;

const handleAnotherClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Another button clicked');
};

Primary.args = {
  color: 'primary',
  loading: false,
  variant: 'contained',
  onClick: handleAnotherClick,
  selected: false,
  children: 'Run Query'
} as ButtonProps;

export const Secondary = (args: ButtonProps) => <Button {...args}>Run Query</Button>;

Secondary.args = {
  color: 'secondary',
  variant: 'contained',
} as ButtonProps;

export const Loading = (args: ButtonProps) => <Button {...args}>Run Query</Button>;

Loading.args = {
  loading: true,
  color: 'secondary',
  variant: 'contained',
} as ButtonProps;
