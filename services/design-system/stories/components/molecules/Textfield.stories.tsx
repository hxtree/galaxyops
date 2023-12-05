import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '../../../src';

export default {
  title: 'Molecules/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

type StoryTemplateType = ComponentStory<typeof StoryTemplate>;

function StoryTemplate() {
  return <TextField />;
}

export const Default = StoryTemplate.bind({}) as StoryTemplateType;
