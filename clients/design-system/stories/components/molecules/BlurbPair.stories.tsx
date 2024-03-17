import React from 'react';
import { Meta } from '@storybook/react';
import { BlurbPair, BlurbPairProps, faGithub,  faAddressCard } from '../../../src/main';

export default {
  title: 'Molecules/BlurbPair',
  component: BlurbPair,
} as Meta<typeof BlurbPair>;

export const Default = args => <BlurbPair {...args}/>;

Default.args = {
  iconRight: faGithub,
  textRight: 'This is a blurb about stuff and things.',
  iconLeft: faAddressCard,
  textLeft: 'This is a blurb about stuff and things.',
} as BlurbPairProps;
