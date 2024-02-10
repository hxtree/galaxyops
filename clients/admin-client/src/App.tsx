import '@cats-cradle/design-system/dist/assets/style.css';
import { PageFooter, faGithub } from '@cats-cradle/design-system/dist/main';
import { Router } from './routing/Router';

function App() {
  const parentDomainName = import.meta.env.VITE_PARENT_DOMAIN_NAME ?? 'sandbox.nekosgate.com';

  return (
    <>
      <Router/>
      <PageFooter
        socialMedias={[
          {icon: faGithub, label: 'Github', url: 'https://github.com/hxtree/cats-cradle'},
        ]}
        siteOwner="Cats Cradle"
        links={[
          {url: `https://jukebox.${parentDomainName}`, label: 'Jukebox'},
          {url: `https://design.${parentDomainName}`, label: 'Design System'},
          {url: `https://api.${parentDomainName}`, label: 'Developer API'},
          {url: 'https://nekosgate.awsapps.com/mail', 'label': 'WorkMail'}
      ]}/>
    </>
  );
}

export default App;
