import React from 'react';
import { Meta } from '@storybook/react';
import {
  FontAwesomeIcon,
  faCog,
  faDice,
  faBook,
  faAddressCard,
} from '../../../src';

export default {
  title: 'Atoms/Icons',
  component: FontAwesomeIcon,
} as Meta<typeof FontAwesomeIcon>;

export const Default = () => (
  <>
    <FontAwesomeIcon icon={faCog} />
    <FontAwesomeIcon icon={faBook} />
    <FontAwesomeIcon icon={faDice} />
    <FontAwesomeIcon icon={faAddressCard} />
  </>
);
