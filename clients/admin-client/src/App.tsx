import '@cats-cradle/design-system/dist/assets/style.css';
import { PageFooter } from '@cats-cradle/design-system/dist/main';
import { Router } from './routing/Router';

function App() {
  return (
    <>
      <Router/>
      <PageFooter siteOwner="Cats Cradle" links={[]}/>
    </>
  );
}

export default App;
