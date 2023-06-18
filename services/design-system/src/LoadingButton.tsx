import React from 'react';
import MuiLoadingButton, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = {} & MuiLoadingButtonProps;

export const LoadingButton = (props: LoadingButtonProps) => {
  const { children, ...muiProps } = props;
  return <MuiLoadingButton {...muiProps}>{children}</MuiLoadingButton>;
};
