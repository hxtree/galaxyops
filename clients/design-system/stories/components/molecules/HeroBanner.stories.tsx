import React from 'react';
import { Meta } from '@storybook/react';
import { Button, HeroBanner, HeroBannerProps } from '../../../src/main';

export default {
  title: 'Molecules/HeroBanner',
  component: HeroBanner,
} as Meta<typeof HeroBanner>;

export const Default = args => <HeroBanner {...args}>
  <Button color='primary'>Learn More</Button>
</HeroBanner>;

Default.args = {
  image: 'https://picsum.photos/seed/picsum/1024/300',
  heading: 'Twenty Minutes Goes By Faster?',
  lead: 'Chroma sets the stage contrast creates focal points.',
  toolbar: 'test'
};
