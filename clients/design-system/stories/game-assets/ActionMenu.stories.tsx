import React from 'react';
import { Meta } from '@storybook/react';
import { ActionMenu, ActionMenuProps } from '../../src/main';
import mockData from './loomee-angora.json';

export default {
  title: 'Game Assets/ActionMenu',
  component: ActionMenu,
} as Meta<typeof ActionMenu>;

export const Default = (args: ActionMenuProps) => <ActionMenu {...args} />;

Default.args = {
  data: mockData,
} as ActionMenuProps;
