import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

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
      style={{
        ...(props.selected && { backgroundColor: '#616366', color: '#FFF' }),
        fontFamily: 'Helvetica, arial, sans-serif',
        fontWeight: 'bold',
        borderRadius: '36px',
        padding: '15px 30px 10px 30px',
      }}
    >
      {children}
    </MUIButton>
  );
};

export default Button;