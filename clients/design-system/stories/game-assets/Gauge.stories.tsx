import React from 'react';
import { Meta } from '@storybook/react';
import { Gauge, OrientationType } from '../../src/main';

export default {
  title: 'Game Assets/Gauge',
  component: Gauge,
} as Meta<typeof Gauge>;

export const Default = args => <Gauge {...args} />;

Default.args = {
  color: 'red',
  orientation: OrientationType.RIGHT,
};
