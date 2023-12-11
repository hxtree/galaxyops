import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export type LinkProps = MUILinkProps;

export const Link = (props: LinkProps) => {
  const { children, ...muiProps } = props;
  return <MUILink {...muiProps}>{children}</MUILink>;
};

export default Link;