import React from 'react';
import {Meta} from '@storybook/react';
import {Button} from '../src/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Default = () => <Button>Click Me</Button>;
