import React from 'react';
import MUIPaper, { PaperProps as MUIPaperProps } from '@mui/material/Paper';

export type PaperProps = {} & MUIPaperProps;

export const Paper = (props: PaperProps) => {
  const { children, ...muiProps } = props;
  return <MUIPaper {...muiProps}>{children}</MUIPaper>;
};
