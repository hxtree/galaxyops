import './style.scss';
import React, { ReactNode } from 'react';

export type NavMenuItem = {
  link: string;
  title: string;
}

export type AppBarProps = {
  menuItems?: NavMenuItem[];
  siteTitle?: string;
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
  topRightSlot: ReactNode;
}

export const AppBar = (props: AppBarProps) => {
  const { topRightSlot, children, siteTitle } = props;

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light`}>
        <div className="container">
         <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">{siteTitle || 'Your Brand'}</a>
          <div className="d-none d-sm-block">
          {topRightSlot}
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light app-bar-light d-none d-lg-block">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            {children}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppBar;
