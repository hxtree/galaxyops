import React from 'react';
import { Meta } from '@storybook/react';
import { FontAwesomeIcon, Stack, Divider, Paper } from '../../../src/main';

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
    <div className="bg-brand-dark" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bg-brand-light" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bg-brand-primary" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bg-brand-secondary" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bg-brand-tertiary" style={{ width: '3rem', height:'3em' }}></div>
  </Stack>
);
