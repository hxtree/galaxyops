// import { Button } from '@cats-cradle/design-system';
// import { SetStateAction, useState } from 'react';
import { AppBar, Button } from '@cats-cradle/design-system/dist/main';
import { Outlet, NavLink } from 'react-router-dom';
import { BreadCrumbs } from './Breadcrumbs';


const Header = () => {
  // const [current, setCurrent] = useState('h');
  // const onClick = (e: { key: SetStateAction<string>; }) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  type NavMenuItem = {
    link: string;
    title: string;
  }
  const menuItems: NavMenuItem[] = [
    {link: '/', title: 'Home'},
    {link: '/dice-analyzer', title: 'Dice analyzer'},
    {link: '/archetypes', title: 'Archetypes'},
    {link: '/character-sheets', title: 'Character Sheets'}
  ];

  return (
    <>
      <AppBar
        topRightSlot={<>Customer Service | <Button href="/login" color="inherit" size="small">Login</Button></>}
      >
        <ul className="navbar-nav me-auto">
          {menuItems && menuItems.map(
            (menuItem: NavMenuItem) => (
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "active" : "") +
                  " nav-link"} to={menuItem.link}>{menuItem.title}</NavLink>
            </li>
          ))}
        </ul>
      </AppBar>
      <div className="container mt-2 mb-2">
        <BreadCrumbs/>
      </div>
      <Outlet/>
    </>
  )
};
export default Header;
