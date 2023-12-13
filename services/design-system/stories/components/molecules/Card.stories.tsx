import React from 'react';
import { Meta } from '@storybook/react';
import { BasicCard } from '../../../src/main';

export default {
  title: 'Molecules/Card',
  component: BasicCard,
} as Meta<typeof BasicCard>;

export const Default = (args: BasicCard) =>
  <BasicCard {...args}/>;

Default.args = {
}