import React from 'react';
import { Meta } from '@storybook/react';
import { Gauge, OrientationType } from '../src';

export default {
  title: 'HUD/Gauge',
  component: Gauge,
} as Meta<typeof Gauge>;

export const Default = args => <Gauge {...args} />;

Default.args = {
  color: 'red',
  orientation: OrientationType.RIGHT,
};
