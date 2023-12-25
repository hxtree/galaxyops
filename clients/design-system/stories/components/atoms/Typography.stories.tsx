import React from 'react';
import { Meta } from '@storybook/react';
import { Typography, TypographyProps } from '../../../src/main';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta<typeof Typography>;

/**
 * Page heading1, there should only be one per page at the top level
 * @returns
 */
export const Default = (args: TypographyProps) =>
  <Typography {...args}>{args.variant}</Typography>;

Default.args = {
  variant: 'h1',
  fill: true,
  align: 'center',
  border: false,
} as TypographyProps;