import React from 'react';
import { Meta } from '@storybook/react';
import { DataHighlights, DataHighlightsProps } from '../../../src/main';

export default {
  title: 'Molecules/DataHighlights',
  component: DataHighlights,
} as Meta<typeof DataHighlights>;

export const Default = args => <DataHighlights {...args} />;

Default.args = {
  data: [
    { number: '1K+', description: 'Commits' },
    { number: '25+', description: 'Microservices' },
    { number: '1M+', description: 'SLOC' },
  ],
  spacing: { top: 1 },
} as DataHighlightsProps;
