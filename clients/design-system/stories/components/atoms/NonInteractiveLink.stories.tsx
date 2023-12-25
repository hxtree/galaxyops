import React from 'react';
import { Meta } from '@storybook/react';
import {
  NonInteractiveLink,
  NonInteractiveLinkProps,
} from '../../../src/main';

export default {
  title: 'Atoms/NonInteractiveLink',
  component: NonInteractiveLink,
} as Meta<typeof NonInteractiveLink>;

export const Default = args => (
  <NonInteractiveLink {...args}>
    https://api.google.com/?q=abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890
  </NonInteractiveLink>
);

Default.args = {};
