import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';

export type AlertProps = {} & MUIAlertProps;

export const Alert = (props: AlertProps) => {
  const { ...muiProps } = props;
  return <MUIAlert {...muiProps} />;
};

export default Alert;