import MuiLoadingButton, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = {} & MuiLoadingButtonProps;

export const LoadingButton = (props: LoadingButtonProps) => {
  const { children, ...muiProps } = props;
  return (
    <MuiLoadingButton
      {...muiProps}
      style={{
        fontFamily: 'Helvetica, arial, sans-serif',
        fontWeight: 'bold',
      }}
    >
      {children}
    </MuiLoadingButton>
  );
};

export default LoadingButton;