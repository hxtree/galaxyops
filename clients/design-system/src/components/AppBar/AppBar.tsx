import './style.module.scss';
import React, { ReactNode, useEffect } from 'react';
import { AppBarIcon } from '../AppBarIcon/AppBarIcon';
import { useBodyScrollLock } from './useBodyScrollLock';
import { useMenuResize } from './useMenuResize';

export type NavMenuItem = {
  link: string;
  title: string;
};

export type AppBarProps = {
  menuItems?: NavMenuItem[];
  menuMobileItems?: NavMenuItem[];
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
  topRightSlot: ReactNode;
};

const BREAKPOINT_MD_MAX = 991;

export const AppBar = (props: AppBarProps) => {
  const { topRightSlot, children, theme, menuMobileItems } = props;
  const [collapsed, setCollapsed] = React.useState(true);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuMobileRef = React.useRef<HTMLDivElement>(null);
  const appBarIconRef = React.useRef<HTMLButtonElement>(null);

  const themeSelected = theme || 'dark';

  const openMobileMenu = () => {
    setCollapsed(false);
  };

  const closeMobileMenu = () => {
    setCollapsed(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!appBarIconRef.current || !menuMobileRef.current) {
      return;
    }
    if (event.key === 'Tab') {
      const items =
        menuMobileRef.current.querySelectorAll<HTMLElement>('button, a');
      const lastItem = items[items.length - 1];
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === appBarIconRef.current) {
          event.preventDefault();
          lastItem.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastItem) {
          event.preventDefault();
          appBarIconRef.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      menu.addEventListener('keydown', handleKeyDown);
      return () => {
        menu.removeEventListener('keydown', handleKeyDown);
      };
    }
    return undefined;
  }, []);

  useBodyScrollLock(!collapsed);
  useMenuResize(menuRef, closeMobileMenu, BREAKPOINT_MD_MAX);

  return (
    <div className="app-bar" ref={menuRef}>
      <nav className={`navbar navbar-expand-lg navbar-${themeSelected}`}>
        <div className="container">
          <AppBarIcon
            className={`d-lg-none`}
            collapsed={collapsed}
            onClick={() => (collapsed ? openMobileMenu() : closeMobileMenu())}
            ref={appBarIconRef}
          />
          <a className="navbar-brand" href="/">
            <img
              src="/assets/brand/nekos-gate.png"
              alt="Nekos Gate"
              className="navbar-logo"
            />
          </a>
          <div className="d-none d-sm-block">{topRightSlot}</div>
        </div>
      </nav>

      <nav className="navbar-menu navbar navbar-expand-lg navbar-light app-bar-light d-none d-lg-block p-0">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            {children}
          </div>
        </div>
      </nav>
      <nav
        className={`navbar-menu-mobile ${collapsed && 'd-none'}`}
        ref={menuMobileRef}
      >
        <div className="container">
          {menuMobileItems && menuMobileItems.length > 0 && (
            <ul>
              {menuMobileItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
