import React from 'react';
import { Meta } from '@storybook/react';
import { Chart } from '../../../src/Charts/LineChart';

export default {
  title: 'Molecules/Chart',
  component: Chart,
} as Meta<typeof Chart>;

export const Default = () => (
  <Chart
    chartType="LineChart"
    width="100%"
    height="400px"
    data={[
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
      ['2008', 1030, 540],
    ]}
    options={{
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
    }}
  />
);
