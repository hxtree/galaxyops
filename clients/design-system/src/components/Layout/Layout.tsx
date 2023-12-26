import MUIBox, { BoxProps as MUIBoxProps } from '@mui/material/Box';
import MUIStack, { StackProps as MUIStackProps } from '@mui/material/Stack';
import MUIGrid, { GridProps as MUIGridProps } from '@mui/material/Grid';

export type StackProps = MUIStackProps;
export const Stack = (props: StackProps) => {
  const { children, ...muiProps } = props;
  return <MUIStack {...muiProps}>{children}</MUIStack>;
};

export type BoxProps = MUIBoxProps;
export const Box = (props: BoxProps) => {
  const { children, ...muiProps } = props;
  return <MUIBox {...muiProps}>{children}</MUIBox>;
};

export type GridProps = MUIGridProps;
export const Grid = (props: GridProps) => {
  const { children, ...muiProps } = props;
  return <MUIGrid {...muiProps}>{children}</MUIGrid>;
};

