import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paper } from '../src/Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default = () => <Paper />;
