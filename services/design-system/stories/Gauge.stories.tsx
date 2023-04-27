import React from 'react';
import { Meta } from '@storybook/react';
import { Gauge } from '../src';

export default {
  title: 'HUD/Gauge',
  component: Gauge,
} as Meta<typeof Gauge>;

export const Default = () => <Gauge />;
