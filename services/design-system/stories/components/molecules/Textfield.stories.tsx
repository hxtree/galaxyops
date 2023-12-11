import React from 'react';
import { Meta } from '@storybook/react';
import { TextField } from '../../../src/main';

export default {
  title: 'Molecules/TextField',
  component: TextField,
  argTypes: {},
} as Meta<typeof TextField>;



export const Default = () => <TextField/>;
