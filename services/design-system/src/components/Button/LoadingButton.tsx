import MuiLoadingButton, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = {
  selected?: boolean;
} & MuiLoadingButtonProps;

export const LoadingButton = (props: LoadingButtonProps) => {
  const { children, ...muiProps } = props;
  return (
    <MuiLoadingButton
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
    </MuiLoadingButton>
  );
};

export default LoadingButton;