import React from 'react';
import { Meta } from '@storybook/react';
import { FileUpload } from '../../../src/main';

export default {
  title: 'Molecules/FileUpload',
  component: FileUpload,
} as Meta<typeof FileUpload>;

export const Default = () => <FileUpload setFile={() => {}} />;
