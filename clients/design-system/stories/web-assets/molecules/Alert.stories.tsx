import React from 'react';
import { Meta } from '@storybook/react';
import { Alert, AlertProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Alert',
  component: Alert,
} as Meta<typeof Alert>;

export const Warning = args => <Alert {...args}>This is an alert.</Alert>;

Warning.args = {
  severity: 'warning',
} as AlertProps;

export const Info = args => <Alert {...args}>This is an alert.</Alert>;

Info.args = {
  severity: 'info',
} as AlertProps;

export const Success = args => <Alert {...args}>This is an alert.</Alert>;

Success.args = {
  severity: 'success',
} as AlertProps;

export const Danger = args => <Alert {...args}>This is an alert.</Alert>;

Danger.args = {
  severity: 'danger',
} as AlertProps;
