import React from 'react';
import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export type NonInteractiveLinkProps = {} & MUILinkProps;

export const NonInteractiveLink = (props: NonInteractiveLinkProps) => {
  const { children, ...muiProps } = props;

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          width: 20,
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
      <MUILink
        style={{ color: '#C7274E', textDecoration: 'none' }}
        {...muiProps}
      >
        {children}
      </MUILink>
    </div>
  );
};
