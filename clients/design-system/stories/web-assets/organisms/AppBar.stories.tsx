import React from 'react';
import { Meta } from '@storybook/react';
import { AppBar, AppBarProps, Button, Link } from '../../../src/main';

export default {
  title: 'Web Assets/Organisms/AppBar',
  component: AppBar,
} as Meta<typeof AppBar>;

type NavMenuItem = {
  link: string;
  title: string;
};
const menuItems: NavMenuItem[] = [
  { link: '/', title: 'Home' },
  { link: '/dice-analyzer', title: 'Dice analyzer' },
  { link: '/archetypes', title: 'Archetypes' },
  { link: '/character-sheets', title: 'Character Sheets' },
];

export const AppBarLight = (args: AppBarProps) => (
  <AppBar {...args}>
    <ul className="navbar-nav me-auto">
      {menuItems &&
        menuItems.map((menuItem: NavMenuItem) => (
          <li className="nav-item">
            <Link href={menuItem.link}>{menuItem.title}</Link>
          </li>
        ))}
    </ul>
  </AppBar>
);

AppBarLight.args = {
  position: 'fixed',
  theme: 'light',
  siteTitle: 'NekosGate',
  topRightSlot: (
    <>
      <Button href="/login" color="secondary" size="small">
        Login
      </Button>
    </>
  ),
} as AppBarProps;

export const AppBarDark = (args: AppBarProps) => (
  <AppBar {...args}>
    <ul className="navbar-nav me-auto">
      {menuItems &&
        menuItems.map((menuItem: NavMenuItem) => (
          <li className="nav-item">
            <Link href={menuItem.link}>{menuItem.title}</Link>
          </li>
        ))}
    </ul>
  </AppBar>
);

AppBarDark.args = {
  ...AppBarLight.args,
  theme: 'dark',
};
