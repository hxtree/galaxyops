import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../../../src/main';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = (args: CheckboxProps) =>
  <><Checkbox {...args}/> Label</>;

Default.args = {
  checked: true,
} as CheckboxProps;