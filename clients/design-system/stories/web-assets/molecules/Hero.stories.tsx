import React from 'react';
import { Meta } from '@storybook/react';
import { Button, Hero, HeroProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Hero',
  component: Hero,
} as Meta<typeof Hero>;

export const Default = (args: HeroProps) => (
  <Hero {...args}>
    <Button color="primary">Learn More</Button>
  </Hero>
);

Default.args = {
  image: 'https://picsum.photos/seed/picsum/1024/300',
  heading: 'Make Twenty Minutes<br/>Go By Faster',
  lead: 'Chroma sets the stage contrast creates focal points.',
  imageRight: '/shield-sword.png',
} as HeroProps;
