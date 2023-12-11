import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Stack, Item } from '../../../src/main';

export default {
  title: 'Molecules/Layout',
  component: Stack,
} as Meta<typeof Stack>;

export const Default = () => (
  <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      <Item>First</Item>
      <Item>Second</Item>
      <Item>Third</Item>
    </Stack>
  </Box>
);
