import React from 'react';
import { Paper } from '../../src';

export type PageFooterProps = {
  siteOwner: string;
  links: string[];
}

export const PageFooter = (props: PageFooterProps) => {
  const { links, siteOwner, ...otherProps } = props;

  const year = new Date().getFullYear();

  return (
    <Paper>
      <p>&copy; {year} {siteOwner} . All Rights Reserved.</p>
    </Paper>
  );
};
