import React from 'react';
import { Meta } from '@storybook/react';
import {
  NonInteractiveLink,
  NonInteractiveLinkProps,
} from '../src/NonInteractiveLink';

export default {
  title: 'Components/NonInteractiveLink',
  component: NonInteractiveLink,
} as Meta<typeof NonInteractiveLink>;

export const Default = args => (
  <NonInteractiveLink {...args}>https://api.google.com/</NonInteractiveLink>
);

Default.args = {};
