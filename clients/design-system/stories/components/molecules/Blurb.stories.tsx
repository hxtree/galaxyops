import React from 'react';
import { Meta } from '@storybook/react';
import { Blurb, BlurbProps, faGithub,  faAddressCard } from '../../../src/main';

export default {
  title: 'Molecules/Blurb',
  component: Blurb,
} as Meta<typeof Blurb>;

export const Default = args => <Blurb {...args}/>;

Default.args = {
  iconRight: faGithub,
  textRight: 'This is a blurb about stuff and things.',
  iconLeft: faAddressCard,
  textLeft: 'This is a blurb about stuff and things.',
} as BlurbProps;
