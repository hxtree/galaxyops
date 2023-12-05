import React from 'react';
import { Meta } from '@storybook/react';
import { Alert, AlertProps } from '../../../src';

export default {
  title: 'Molecules/Alert',
  component: Alert,
} as Meta<typeof Alert>;

export const Error = args => <Alert {...args}>This is an alert.</Alert>;

Error.args = {
  severity: 'error',
};

export const Warning = args => <Alert {...args}>This is an alert.</Alert>;

Warning.args = {
  severity: 'warning',
};

export const Info = args => <Alert {...args}>This is an alert.</Alert>;

Info.args = {
  severity: 'info',
};

export const Success = args => <Alert {...args}>This is an alert.</Alert>;

Success.args = {
  severity: 'success',
};
