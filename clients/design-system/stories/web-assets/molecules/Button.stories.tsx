import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary = (args: ButtonProps) => <Button {...args}></Button>;

Primary.args = {
  color: 'primary',
  selected: false,
  disabled: false,
  loading: false,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Another button clicked', event);
  },
  children: 'Run Query',
} as ButtonProps;

export const Secondary = (args: ButtonProps) => (
  <Button {...args}>Run Query</Button>
);

Secondary.args = {
  selected: false,
  disabled: false,
  loading: false,
  color: 'secondary',
  href: 'http://example.com',
} as ButtonProps;

export const Loading = (args: ButtonProps) => (
  <Button {...args}>Run Query</Button>
);

Loading.args = {
  selected: false,
  disabled: false,
  loading: true,
  color: 'secondary',
} as ButtonProps;

export const Disabled = (args: ButtonProps) => (
  <Button {...args}>Run Query</Button>
);

Disabled.args = {
  selected: false,
  disabled: true,
  loading: false,
  color: 'primary',
} as ButtonProps;
