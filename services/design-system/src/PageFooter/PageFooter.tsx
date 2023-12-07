import React from 'react';
import './page-footer.scss';

export type PageFooterProps = {
  siteOwner: string;
  links: string[];
};

export const PageFooter = (props: PageFooterProps) => {
  const { links, siteOwner, ...otherProps } = props;

  const year = new Date().getFullYear();

  return (
    <footer className='page-footer'>

      <hr/>
      <p>&copy; {year} {siteOwner}. All Rights Reserved.</p>
    </footer>
  );
};
