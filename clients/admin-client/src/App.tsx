import '@cats-cradle/design-system/dist/assets/style.css';
import { PageFooter } from '@cats-cradle/design-system/dist/main';
import { Router } from './routing/Router';

function App() {
  return (
    <>
      <Router/>
      <PageFooter siteOwner="Cats Cradle" links={[{label: 'Example', url: 'okay'}]}/>
    </>
  );
}

export default App;



// import { BrowserRouter as Router, Route } from "react-router-dom";

// import routes from "./routing/routes";
// import Breadcrumbs from "./components/Breadcrumbs";

// const App = () => (
//   <Router>
//     <div className="w-screen h-screen flex justify-center p-8">
//         {routes.map(({ path, name, Component }, key) => (
//           <Route
//             exact
//             path={path}
//             key={key}
//             render={props => {
//               const crumbs = routes
//                 // Get all routes that contain the current one.
//                 .filter(({ path }) => props.match.path.includes(path))
//                 // Swap out any dynamic routes with their param values.
//                 // E.g. "/pizza/:pizzaId" will become "/pizza/1"
//                 .map(({ path, ...rest }) => ({
//                   path: Object.keys(props.match.params).length
//                     ? Object.keys(props.match.params).reduce(
//                         (path, param) =>
//                           path.replace(`:${param}`, props.match.params[param]),
//                         path
//                       )
//                     : path,
//                   ...rest
//                 }));

//               console.log(`Generated crumbs for ${props.match.path}`);
//               crumbs.map(({ name, path }) => console.log({ name, path }));

//               return (
//                 <div className="p-8">
//                   <Breadcrumbs crumbs={crumbs} />
//                   <Component {...props} />
//                 </div>
//               );
//             }}
//           />
//         ))}
//     </div>
//   </Router>
// );

// export default App;