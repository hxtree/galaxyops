import React from 'react';
import { Meta } from '@storybook/react';
import { ActionMenu } from '../../src/main';
import mockData from './mockData.json';

export default {
  title: 'HUD/ActionMenu',
  component: ActionMenu,
} as Meta<typeof ActionMenu>;

export const Default = args => <ActionMenu {...args} />;

Default.args = {
  data: mockData,
};
