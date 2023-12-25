import '@cats-cradle/design-system/dist/assets/style.css';
import { PageFooter, faGithub } from '@cats-cradle/design-system/dist/main';
import { Router } from './routing/Router';

function App() {
  return (
    <>
      <Router/>
      <PageFooter
        socialMedias={[
          {icon: faGithub, label: 'Github', url: 'https://github.com/hxtree/cats-cradle'},
        ]}
        links={[]}
        siteOwner="Cats Cradle"
      />
    </>
  );
}

export default App;
