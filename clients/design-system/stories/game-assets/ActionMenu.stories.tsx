import React from 'react';
import { Meta } from '@storybook/react';
import { ActionMenu } from '../../src/main';
import mockData from './loomee-angora.json';

export default {
  title: 'Game Assets/HUD/ActionMenu',
  component: ActionMenu,
} as Meta<typeof ActionMenu>;

export const Default = args => <ActionMenu {...args} />;

Default.args = {
  data: mockData,
};
