import '@cats-cradle/design-system/dist/assets/style.css';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import DicePage from "../pages/dice.page";
import ArchetypesPage from "../pages/archetypes.page";
import CharacterSheetsPage from '../pages/character-sheets.page';
import HomePage from '../pages/home.page';
import { Outlet} from 'react-router-dom';
import { BreadCrumbs } from '../components/Breadcrumbs';
import Header from "../components/Header";

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