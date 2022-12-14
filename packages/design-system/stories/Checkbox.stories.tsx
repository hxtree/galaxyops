import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Checkbox} from '../src/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = () => (
  <>
    <Checkbox /> Label
  </>
);
