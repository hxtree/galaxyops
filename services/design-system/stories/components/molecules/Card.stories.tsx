import React from 'react';
import { Meta } from '@storybook/react';
import { BasicCard, BasicCardProps } from '../../../src/main';

export default {
  title: 'Molecules/Card',
  component: BasicCard,
} as Meta<typeof BasicCard>;

export const Default = (args: BasicCardProps) =>
  <BasicCard {...args}/>;

Default.args = {
  title: 'Welcome To Day',
  cta: 'Learn More'
}