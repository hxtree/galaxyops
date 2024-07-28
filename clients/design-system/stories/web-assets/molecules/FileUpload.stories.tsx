import React from 'react';
import { Meta } from '@storybook/react';
import { FileUpload } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/FileUpload',
  component: FileUpload,
} as Meta<typeof FileUpload>;

export const Default = () => <FileUpload setFile={() => {}} />;
