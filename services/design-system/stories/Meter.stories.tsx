import React from 'react';
import { Meta } from '@storybook/react';
import { Meter, OrientationType } from '../src';

export default {
  title: 'HUD/Meter',
  component: Meter,
} as Meta<typeof Meter>;

export const Default = args => <Meter {...args} />;

Default.args = {
  color: 'red',
  orientation: OrientationType.RIGHT,
};
