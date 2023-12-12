import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import './style.module.scss';

export type ButtonProps = {
  selected?: boolean;
} & MUIButtonProps;

export const Button = (props: ButtonProps) => {
  const { children, ...muiProps } = props;

  muiProps.variant = muiProps.variant ?? 'contained';
  muiProps.color = muiProps.color ?? 'inherit';

  return (
    <MUIButton
      {...muiProps}
      className='button'
    >
      {children}
    </MUIButton>
  );
};

export default Button;