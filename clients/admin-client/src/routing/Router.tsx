import '@cats-cradle/design-system/dist/assets/style.css';
import { Link, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from "../components/Header";
import DicePage from "../pages/dice.page";
import ArchetypesPage from "../pages/archetypes.page";
import CharacterSheetsPage from '../pages/character-sheets.page';
import HomePage from '../pages/home.page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      element={<Header />}
      handle={{
        title: 'Home',
        url: '/',
        crumb: () => <Link to="/">Home</Link>,
      }}
      >
      <Route
        path="/dice-analyzer"
        element={<DicePage />}
        handle={{
          title: 'Dice Analyzer',
          url: '/dice-analyzer',
          crumb: () => <Link to="/dice-analyzer">Dice Analyzer</Link>,
        }}
        />
      <Route
        path="/character-sheets"
        element={<CharacterSheetsPage />}
        handle={{
          title: 'Character Sheets',
          url: '/character-sheets',
          crumb: () => <Link to="/character-sheets">Character Sheets</Link>,
        }}
        />
      <Route
        path="archetypes"
        element={<ArchetypesPage />}
        handle={{
          title: 'Archetypes',
          url: '/archetypes',
          crumb: () => <Link to="/archetypes">Archetypes</Link>,
        }}
      />
    </Route>
  )
)

export const Router = () => {
  return (
    <RouterProvider router={router}/>
  );
}