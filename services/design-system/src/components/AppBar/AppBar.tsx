import './style.scss';
import React from "react";

export type NavMenuItem = {
  link: string;
  title: string;
}

export type AppBarProps = {
  menuItems?: NavMenuItem[];
  siteTitle?: string;
  theme?: 'dark' | 'light';
  children?: any;
}

export const AppBar = (props: AppBarProps) => {
  const { children, siteTitle, menuItems, theme } = props;

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light`}>
        <div className="container">
          <a className="navbar-brand" href="#">{siteTitle || 'Your Brand'}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark app-bar-dark">
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
