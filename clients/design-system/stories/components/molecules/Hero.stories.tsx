import React from 'react';
import { Meta } from '@storybook/react';
import { Button, Hero, HeroProps } from '../../../src/main';

export default {
  title: 'Molecules/Hero',
  component: Hero,
} as Meta<typeof Hero>;

export const Default = args => <Hero {...args}>
  <Button color='primary'>Learn More</Button>
</Hero>;

Default.args = {
  image: 'https://picsum.photos/seed/picsum/1024/300',
  heading: 'Twenty Minutes Goes By Faster?',
  lead: 'Chroma sets the stage contrast creates focal points.',
  toolbar: 'test'
};
