import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';

export default {
  title: 'Interactive/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Click me!</Button>
);

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {};
