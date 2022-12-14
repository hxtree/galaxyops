import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Spinner} from '../src/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

export const Default = () => <Spinner />;
