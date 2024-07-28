import React from 'react';
import { Meta } from '@storybook/react';
import { Button, HeroBanner, HeroBannerProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/HeroBanner',
  component: HeroBanner,
} as Meta<typeof HeroBanner>;

export const Default = args => (
  <HeroBanner {...args}>
    <Button color="primary">Learn More</Button>
  </HeroBanner>
);

Default.args = {
  heading: 'Twenty Minutes Goes By Faster?',
  lead: 'Chroma sets the stage contrast creates focal points.',
  image: 'https://placehold.co/600x400',
  background: 'https://picsum.photos/seed/picsum/1024/300',
  toolbar: 'test',
} as HeroBannerProps;
