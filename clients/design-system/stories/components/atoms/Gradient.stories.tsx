import React from 'react';
import { Meta } from '@storybook/react';
import { Gradient, GradientProps } from '../../../src/main';
import { GradientVariant } from '../../../src/components/Gradient/GradientVariant.enum';

export default {
  title: 'Atoms/Gradient',
  component: Gradient,
  argTypes: {
    variant: {
      options: Object.values(GradientVariant),
      mapping: Object.values(GradientVariant),
      control: {
        type: 'select',
        labels: Object.keys(GradientVariant),
      },
    },
  },
} as Meta<typeof Gradient>;

export const Default = (args: GradientProps) =>
  <Gradient {...args}>
    Sample Content
  </Gradient>;

Default.args = {
  variant: GradientVariant.BG_BLUE_TO_LIME_75_NW,
} as GradientProps;