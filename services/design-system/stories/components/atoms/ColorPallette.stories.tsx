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
    <div className="bgBrandDark" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bgBrandLight" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bgBrandPrimary" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bgBrandSecondary" style={{ width: '3rem', height:'3em' }}></div>
    <div className="bgBrandTertiary" style={{ width: '3rem', height:'3em' }}></div>
  </Stack>
);
