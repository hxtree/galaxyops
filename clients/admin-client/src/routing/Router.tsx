import '@cats-cradle/design-system/dist/assets/style.css';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import DicePage from "../pages/dice.page";
import ArchetypesPage from "../pages/archetypes.page";
import CharacterSheetsPage from '../pages/character-sheets.page';
import HomePage from '../pages/home.page';
import { Outlet} from 'react-router-dom';
import { BreadCrumbs } from '../components/Breadcrumbs';
import Header from "../components/Header";
import LoginPage from '../pages/login.page';
import SignupPage from '../pages/signup.page';

const Root = () => {
  return (
    <>
      <Header/>
      <BreadCrumbs/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    handle: {
      title: 'Home',
      url: '/',
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
        handle: {
          title: 'Signup',
          url: '/signup',
          crumb: () => <Link to="/signup">Signup</Link>,
        }
      },
      {
        path: "/login",
        element: <LoginPage />,
        handle: {
          title: 'Log In',
          url: '/login',
          crumb: () => <Link to="/login">Log In</Link>,
        }
      },
      {
        path: "/forgot-password",
        element: <LoginPage />,
        handle: {
          title: 'Forgot Password',
          url: '/forgot-password',
          crumb: () => <Link to="/forgot-password">Forgot Password</Link>,
        }
      },
      {
        path: "/character-sheets",
        element: <CharacterSheetsPage />,
        handle: {
          title: 'Character Sheets',
          url: '/character-sheets',
          crumb: () => <Link to="/character-sheets">Character Sheets</Link>,
        }
      },
      {
        path: "/dice-analyzer",
        element: <DicePage />,
        handle: {
        title: 'Dice Analyzer',
        url: '/dice-analyzer',
          crumb: () => <Link to="/dice-analyzer">Dice Analyzer</Link>,
        }
      },
      {
        path: "/archetypes",
        element: <ArchetypesPage />,
        handle:{
          title: 'Archetypes',
          url: '/archetypes',
          crumb: () => <Link to="/archetypes">Archetypes</Link>,
        }
      },


    ],
  },
]);

export const Router = () => {
  return (
    <RouterProvider router={router}/>
  );
}