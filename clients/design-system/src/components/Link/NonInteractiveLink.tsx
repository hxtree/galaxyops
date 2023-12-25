import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export type NonInteractiveLinkProps = MUILinkProps;

export const NonInteractiveLink = (props: NonInteractiveLinkProps) => {
  const { children, ...muiProps } = props;

  const linkSX = {
    '&:hover': {
      cursor: 'not-allowed',
    },
    color: '#C7274E',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    fontFamily: 'Helvetica, arial, sans-serif',
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          width: '40px',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'inline-block',
          overflow: 'hidden',
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
      <MUILink sx={linkSX} {...muiProps}>
        {children}
      </MUILink>
    </div>
  );
};

export default NonInteractiveLink;