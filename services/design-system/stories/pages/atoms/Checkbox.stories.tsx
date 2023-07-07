import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox } from '../../../src';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = () => (
  <>
    <Checkbox /> Label
  </>
);
