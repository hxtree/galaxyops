import MUICheckbox, {
  CheckboxProps as MUICheckboxProps,
} from '@mui/material/Checkbox';

export type CheckboxProps = {} & MUICheckboxProps;

export const Checkbox = (props: CheckboxProps) => {
  const { ...muiProps } = props;
  return <MUICheckbox {...muiProps} />;
};

export default Checkbox;