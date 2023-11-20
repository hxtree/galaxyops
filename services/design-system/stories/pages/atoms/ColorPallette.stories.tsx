import React from 'react';
import { Meta } from '@storybook/react';
import { FontAwesomeIcon, Stack, Divider, Paper } from '../../../src';

export default {
  title: 'Atoms/ColorPallette',
  component: FontAwesomeIcon,
} as Meta<typeof FontAwesomeIcon>;

// TODO create a display of permitted colors
export const Default = () => (
  <Stack
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
  >
    <div style={{ background: '#000' }}></div>
  </Stack>
);
