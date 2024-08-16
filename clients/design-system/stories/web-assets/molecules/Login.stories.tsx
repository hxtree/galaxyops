import React from 'react';
import { Meta } from '@storybook/react';
import { Login, LoginProps, LoginVariant } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Login',
  component: Login,
} as Meta<typeof Login>;

export const Default = (args: LoginProps) => <Login {...args} />;

Default.args = {
  variant: LoginVariant.DEFAULT,
} as LoginProps;
