import React from 'react';
import { Meta } from '@storybook/react';
import { LoadingButton, LoadingButtonProps } from '../src/LoadingButton';

export default {
  title: 'Components/LoadingButton',
  component: LoadingButton,
} as Meta<typeof LoadingButton>;

export const Default = args => (
  <LoadingButton {...args}>Run Query</LoadingButton>
);

Default.args = {
  variant: 'contained',
  color: 'primary',
  loading: false,
};

export const IsLoading = args => (
  <LoadingButton {...args}>Run Query</LoadingButton>
);

IsLoading.args = {
  variant: 'contained',
  color: 'primary',
  loading: true,
};
