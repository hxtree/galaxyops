import * as React from 'react';
import MUIBox, { BoxProps as MUIBoxProps } from '@mui/material/Box';
import MUIStack, { StackProps as MUIStackProps } from '@mui/material/Stack';
import MUIGrid, { GridProps as MUIGridProps } from '@mui/material/Grid';
import MUIPaper, { PaperProps as MUIPaperProps } from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

export type StackProps = {} & MUIStackProps;
export const Stack = (props: StackProps) => {
  const { children, ...muiProps } = props;
  return <MUIStack {...muiProps}>{children}</MUIStack>;
};

export type BoxProps = {} & MUIBoxProps;
export const Box = (props: BoxProps) => {
  const { children, ...muiProps } = props;
  return <MUIBox {...muiProps}>{children}</MUIBox>;
};

export type GridProps = {} & MUIGridProps;
export const Grid = (props: GridProps) => {
  const { children, ...muiProps } = props;
  return <MUIGrid {...muiProps}>{children}</MUIGrid>;
};

export type PaperProps = {} & MUIPaperProps;
export const Paper = (props: PaperProps) => {
  const { children, ...muiProps } = props;
  return <MUIPaper {...muiProps}>{children}</MUIPaper>;
};

// export const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
