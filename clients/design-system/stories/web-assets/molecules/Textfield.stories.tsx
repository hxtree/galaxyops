import React from 'react';
import { Meta } from '@storybook/react';
import { TextField } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/TextField',
  component: TextField,
  argTypes: {},
} as Meta<typeof TextField>;

export const Default = () => (
  <TextField
    id="email-address"
    placeholder="Enter Your Email"
    label="Email Address"
    type="text"
  />
);
