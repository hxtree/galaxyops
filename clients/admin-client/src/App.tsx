import '@galaxyops/design-system/dist/assets/style.css';
import { AppProvider } from './context/AppProvider';
import { PageFooter, faGithub } from '@galaxyops/design-system/dist/main';
import { Router } from './routing/Router';

function App() {
  const parentDomainName =
    import.meta.env.VITE_PARENT_DOMAIN_NAME ?? 'sandbox.nekosgate.com';

  return (
    <AppProvider>
      <Router />
      <PageFooter
        socialMedias={[
          {
            icon: faGithub,
            label: 'Github',
            url: 'https://github.com/hxtree/galaxyops',
          },
        ]}
        siteOwner="Nekos Gate"
        links={[
          { url: `https://jukebox.${parentDomainName}`, label: 'Jukebox' },
          { url: `https://design.${parentDomainName}`, label: 'Design System' },
          { url: `https://api.${parentDomainName}`, label: 'Developer API' },
          { url: 'https://nekosgate.awsapps.com/mail', label: 'WorkMail' },
        ]}
      />
    </AppProvider>
  );
}

export default App;
