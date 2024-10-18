import React from 'react';
import { Meta } from '@storybook/react';
import { Meter, MeterProps } from '../../src/main';

export default {
  title: 'Game Assets/Meter',
  component: Meter,
} as Meta<typeof Meter>;

export const Default = (args: MeterProps) => <Meter {...args} />;

Default.args = {
  percent: 0.5,
  width: 120,
  height: 10,
  color: 'red',
  strokeWidth: 2,
} as MeterProps;
