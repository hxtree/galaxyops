import React from 'react';
import { Meta } from '@storybook/react';
import { Spinner } from '../../../src';

export default {
  title: 'Molecules/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

export const Default = () => <Spinner />;
