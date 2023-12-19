// import { Button } from '@cats-cradle/design-system';
// import { SetStateAction, useState } from 'react';
import { AppBar, Button } from '@cats-cradle/design-system/dist/main';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  // const [current, setCurrent] = useState('h');
  // const onClick = (e: { key: SetStateAction<string>; }) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  return (
    <>
    <AppBar/>
      <Button href="/login" color="inherit" size="small">Login</Button>
       <Link to="/">Home</Link>
        <Link to="/dice-analyzer">Dice Analyzer`</Link>
        <Link to="/archetypes">Archetypes</Link>
        <Outlet/>

    </>

  )
};
export default Header;