import React from 'react';
import MUITextField, {
  TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField';

export type TextFieldProps = {} & MUITextFieldProps;

export default function TextField(props: TextFieldProps) {
  const { ...muiProps } = props;
  return <MUITextField {...muiProps} />;
}
