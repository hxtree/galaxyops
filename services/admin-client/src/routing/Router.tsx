import '@cats-cradle/design-system/dist/assets/style.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from "../components/Header";
import DicePage from "../pages/dice.page";
import ArchetypesPage from "../pages/archetypes.page";
import HomePage from '../pages/home.page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="dice-analyzer" element={<DicePage />} />
      <Route path="archetypes" element={<ArchetypesPage />} />
    </Route>
  )
)

export const Router = () => {
  return (
    <RouterProvider router={router}/>
  );
}