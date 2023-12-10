import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = {} & MUIAppBarProps;

export const AppBar = (props: AppBarProps) => {
  const { ...muiProps } = props;
  return <MUIAppBar {...muiProps} />;
};

export default AppBar;