import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = {
  theme?: 'dark' | 'light';
} & MUIAppBarProps;

export const AppBar = (props: AppBarProps) => {
  const { theme, ...muiProps } = props;
  return <MUIAppBar {...muiProps} className={
    theme === 'dark' ? 'app-bar-dark' : 'app-bar-light'
  }/>;
};

export default AppBar;