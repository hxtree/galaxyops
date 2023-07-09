import React from 'react';
import { Meta } from '@storybook/react';
import {
  FontAwesomeIcon,
  faCog,
  faDice,
  faBook,
  faAddressCard,
  faGithub,
  Stack,
  Divider,
} from '../../../src';

export default {
  title: 'Atoms/Icons',
  component: FontAwesomeIcon,
} as Meta<typeof FontAwesomeIcon>;

export const Default = () => (
  <Stack
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
  >
    <FontAwesomeIcon icon={faGithub} />
    <FontAwesomeIcon icon={faCog} />
    <FontAwesomeIcon icon={faBook} />
    <FontAwesomeIcon icon={faDice} />
    <FontAwesomeIcon icon={faAddressCard} />
  </Stack>
);
