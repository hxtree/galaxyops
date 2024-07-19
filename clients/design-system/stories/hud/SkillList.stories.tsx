import React from 'react';
import { Meta } from '@storybook/react';
import { SkillList } from '../../src/main';
import mockData from './mockData.json';

export default {
  title: 'HUD/SkillList',
  component: SkillList,
} as Meta<typeof SkillList>;

export const Default = args => <SkillList {...args} />;

Default.args = {
  data: mockData,
};
