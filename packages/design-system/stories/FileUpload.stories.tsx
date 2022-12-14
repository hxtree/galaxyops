import React from 'react';
import {Meta, Story} from '@storybook/react';
import {FileUpload} from '../src/FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
} as Meta<typeof FileUpload>;

export const Default = () => <FileUpload />;
