import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Paper, Stack } from '../src/Layout';

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default = () => (
  <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      <Paper>First</Paper>
      <Paper>Second</Paper>
      <Paper>Third</Paper>
    </Stack>
  </Box>
);
