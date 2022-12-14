import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TextField} from '../src/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

type StoryTemplateType = ComponentStory<typeof StoryTemplate>;

function StoryTemplate() {
  return <TextField />;
}

export const Default = StoryTemplate.bind({}) as StoryTemplateType;
