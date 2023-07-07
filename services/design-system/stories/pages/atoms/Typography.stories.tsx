import React from 'react';
import { Meta } from '@storybook/react';
import { Typography } from '../../../src';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta<typeof Typography>;

/**
 * Page heading1, there should only be one per page at the top level
 * @returns
 */
export const Heading1 = () => <Typography variant="h1">Heading1</Typography>;

/**
 * Page heading2, should reside under a page heading2. May be multiple per page.
 * @returns
 */
export const Heading2 = () => <Typography variant="h2">Heading2</Typography>;
export const Heading3 = () => <Typography variant="h3">Heading3</Typography>;
export const Heading4 = () => <Typography variant="h4">Heading4</Typography>;
export const Heading5 = () => <Typography variant="h3">Heading5</Typography>;
export const Body1 = () => <Typography variant="body1">Body1</Typography>;
