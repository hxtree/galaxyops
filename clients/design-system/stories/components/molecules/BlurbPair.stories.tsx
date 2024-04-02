import React from 'react';
import { Meta } from '@storybook/react';
import { BlurbPair, BlurbPairProps, faGithub,  faAddressCard, BlurbIconColors } from '../../../src/main';

export default {
  title: 'Molecules/BlurbPair',
  component: BlurbPair,
  argTypes: {
    variant: {
      options: Object.values(BlurbIconColors),
      mapping: Object.values(BlurbIconColors),
      control: {
        type: 'select',
        labels: Object.keys(BlurbIconColors),
      },
    },
  },
} as Meta<typeof BlurbPair>;

export const Default = args => <BlurbPair {...args}/>;

Default.args = {
  iconLeft: faAddressCard,
  iconColorLeft: BlurbIconColors.ORANGE,
  textLeft: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in. At tempor commodo ullamcorper a lacus vestibulum.',
  linkLeft: 'https://www.google.com',
  ctaLeft: 'Learn More',
  iconRight: faGithub,
  iconColorRight: BlurbIconColors.BLUE,
  textRight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue mauris.',
  linkRight: 'https://www.google.com',
  ctaRight: 'Get There Sooner',
} as BlurbPairProps;
