import React from 'react';
import MUICheckbox, {
  CheckboxProps as MUICheckboxProps,
} from '@mui/material/Checkbox';

export type CheckboxProps = {} & MUICheckboxProps;

export default function Checkbox(props: CheckboxProps) {
  const { ...muiProps } = props;
  return <MUICheckbox {...muiProps} />;
}
