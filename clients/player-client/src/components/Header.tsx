// import { Button } from '@galaxyops/design-system';
// import { SetStateAction, useState } from 'react';
import { AppBar, Button } from '@galaxyops/design-system/dist/main';
import { NavLink } from 'react-router-dom';

const Header = () => {
  type NavMenuItem = {
    link: string;
    title: string;
  };
  const menuItems: NavMenuItem[] = [
    { link: '/', title: 'Home' },
    { link: '/dice-analyzer', title: 'Dice Analyzer' },
    { link: '/archetypes', title: 'Archetypes' },
    { link: '/character-sheets', title: 'Character Sheets' },
  ];

  return (
    <>
      <AppBar
        topRightSlot={
          <>
            <Button href="/signup" color="secondary" size="small">
              Sign Up
            </Button>
            <Button href="/login" color="primary" size="small">
              Login
            </Button>
          </>
        }
      >
        <ul className="navbar-nav me-auto">
          {menuItems &&
            menuItems.map((menuItem: NavMenuItem, index: number) => (
              <li key={index} className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    (isPending ? 'pending' : isActive ? 'active' : '') +
                    ' nav-link'
                  }
                  to={menuItem.link}
                >
                  {menuItem.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </AppBar>
    </>
  );
};
export default Header;
