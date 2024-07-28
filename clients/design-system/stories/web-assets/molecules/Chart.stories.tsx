import React from 'react';
import { Meta } from '@storybook/react';
import { Chart } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Chart',
  component: Chart,
} as Meta<typeof Chart>;

export const LineChart = () => (
  <Chart
    chartType="LineChart"
    width="100%"
    height="400px"
    data={[
      ['Roll', 'Min', 'Max', 'Outcome', 'Luck'],
      [1, 4, 8, 6, 0],
      [2, 4, 8, 8, 1],
      [3, 4, 8, 5, 1],
      [4, 4, 8, 6, 1],
      [5, 4, 8, 7, 1],
      [6, 4, 8, 6, 0],
    ]}
    options={{
      title: 'Roll Outcome',
      curveType: 'function',
      legend: { position: 'bottom' },
    }}
  />
);
