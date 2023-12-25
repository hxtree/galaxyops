import React from 'react';
import './style.module.scss';

export type LinkProps = {
  href?: string;
  children?: React.ReactNode;
  testId?: string
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
  const { href, children, testId } = props;

  return <a href={href} data-testid={testId} ref={ref}>{children}</a>;
});

export default Link;