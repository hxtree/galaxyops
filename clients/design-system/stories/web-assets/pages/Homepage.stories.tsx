import React from 'react';
import { Meta } from '@storybook/react';
import {
  Login,
  BlurbIconColors,
  Paper,
  AppBar,
  faArrowRight,
  Button,
  Typography,
  Alert,
  PageFooter,
  Link,
  faAddressCard,
  faGithub,
  FontAwesomeIcon,
  BlurbPair,
  AlertSeverity,
  Hero,
  DataHighlights,
  Disclaimer,
} from '../../../src/main';

type NavMenuItem = {
  link: string;
  title: string;
};
const menuItems: NavMenuItem[] = [
  { link: '/', title: 'Home' },
  { link: '/dice-analyzer', title: 'Dice analyzer' },
  { link: '/archetypes', title: 'Archetypes' },
  { link: '/character-sheets', title: 'Character Sheets' },
];

export default {
  title: 'Web Assets/Pages/Homepage',
  component: AppBar,
} as Meta<typeof AppBar>;

export const Default = () => (
  <>
    <AppBar
      siteTitle="NekosGate"
      topRightSlot={
        <>
          <Button href="/login" color="secondary" size="small">
            Login
          </Button>
        </>
      }
    >
      <ul className="navbar-nav me-auto">
        {menuItems &&
          menuItems.map((menuItem: NavMenuItem) => (
            <li className="nav-item">
              <Link href={menuItem.link}>{menuItem.title}</Link>
            </li>
          ))}
      </ul>
    </AppBar>

    <Alert severity={AlertSeverity.INFO}>
      Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
    </Alert>

    <div className="container">
      <Hero
        pageTier={1}
        heading={'Et malesuada fames ac turpis.'}
        lead={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula metus quis sagittis malesuada. Nulla facilisi. Duis feugiat tellus eu justo hendrerit, nec congue odio congue.'
        }
        image={'/bg-pale-orange.jpg'}
        imageRight={'/hxtree.png'}
        toolbar={<Login />}
        spacing={{ bottom: 4 }}
      />
      <DataHighlights
        data={[
          { number: '1K', description: 'Commits' },
          { number: '25', description: 'Microservices' },
          { number: '1M', description: 'SLOC' },
        ]}
        spacing={{ top: 1, bottom: 4 }}
      />

      <Paper elevation="2" className="p-5">
        <Typography variant="h1">Et malesuada fames ac turpis.</Typography>
        <Typography variant="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
          metus quis sagittis malesuada. Nulla facilisi. Duis feugiat tellus eu
          justo hendrerit, nec congue odio congue.
        </Typography>

        <Typography variant="body">
          Integer malesuada justo eu metus tincidunt, quis luctus elit posuere.
          Morbi et ipsum euismod, sodales ante in, feugiat justo. Vivamus sed
          suscipit felis. Sed ut lectus ut arcu laoreet ultricies vel in nulla.
          Etiam vel diam vel felis dignissim luctus. Integer bibendum fringilla
          justo, vitae facilisis eros convallis vel. Sed ac tellus vel dui
          finibus pellentesque. Nullam id elit eu urna ullamcorper bibendum. Sed
          nec ex nec lectus finibus bibendum ac eget nunc. Vivamus eu dolor vel
          sem lacinia vestibulum. In hac habitasse platea dictumst. Curabitur
          sit amet augue nec velit eleifend lobortis.{' '}
        </Typography>

        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          est velit egestas dui id ornare arcu. Leo vel orci porta non pulvinar
          neque laoreet suspendisse interdum. Consectetur libero id faucibus
          nisl. Metus aliquam eleifend mi in nulla. Sapien faucibus et molestie
          ac feugiat sed lectus vestibulum mattis. In hac habitasse platea
          dictumst quisque sagittis purus. Dictumst quisque sagittis purus sit
          amet. Amet dictum sit amet justo donec enim diam vulputate ut. Commodo
          ullamcorper a lacus vestibulum sed. At varius vel pharetra vel turpis.
          Cras ornare arcu dui vivamus arcu felis bibendum. Vitae proin sagittis
          nisl rhoncus mattis. Condimentum id venenatis a condimentum{' '}
          <Link href="/">vitae sapien</Link>. Integer vitae justo eget magna
          fermentum.
        </Typography>
        <Button href="/example" color="primary">
          Tincidunt arcu <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        <Button href="/example" color="secondary">
          Congue nisi
        </Button>
      </Paper>

      <BlurbPair
        iconLeft={faAddressCard}
        iconColorLeft={BlurbIconColors.GRAY}
        textLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in. At tempor commodo ullamcorper a lacus vestibulum."
        linkLeft="https://www.google.com"
        ctaLeft="Learn More"
        iconRight={faGithub}
        iconColorRight={BlurbIconColors.GRAY}
        textRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue mauris."
        linkRight="https://www.google.com"
        ctaRight="Get There Sooner"
        spacing={{ top: 5 }}
      />
    </div>

    <Disclaimer spacing={{ top: 5 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit
        quis justo consectetur vehicula. Nullam vel lacus ut magna tincidunt
        dapibus. Phasellus convallis ligula eu eros consequat, quis malesuada
        dolor posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Ut a leo ultrices, maximus elit id,
        vehicula mauris. Vivamus at elit et libero aliquet euismod. Quisque
        vestibulum tempor ligula, ac pellentesque arcu eleifend non. Cras quis
        orci et ligula commodo hendrerit. Fusce quis neque quam.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Morbi eget massa nec velit vestibulum
        scelerisque vel a velit. Duis nec turpis ut orci fringilla tincidunt.
        Donec tincidunt purus vel interdum cursus. Ut vel ligula in mi fermentum
        fringilla ac sit amet justo. Nam tristique erat eget eros maximus, at
        sagittis libero ullamcorper. Duis non odio mi. Nulla facilisi.
        Suspendisse lacinia ullamcorper sodales. Fusce eget turpis nisi. Nulla
        euismod accumsan nisi, vel finibus augue.
      </p>
      <p>
        Aenean eleifend ligula nec quam iaculis, sed ultrices ligula fringilla.
        Etiam non ligula sit amet neque dapibus lobortis. Sed lobortis ipsum nec
        justo sollicitudin laoreet. Integer id mauris sit amet eros fringilla
        iaculis. Nam eu justo nisi. Duis vehicula turpis at erat congue, vel
        sollicitudin orci sodales. Curabitur a augue sit amet lorem eleifend
        aliquam sit amet sit amet elit. Phasellus efficitur, lorem vel volutpat
        ultricies, lacus felis bibendum eros, in laoreet sapien nisl sed tortor.
      </p>
      <p>
        Suspendisse potenti. Proin fringilla tortor a hendrerit facilisis.
        Nullam ultrices mauris vel nisl egestas lacinia. Sed viverra auctor
        quam, id cursus nunc pellentesque sed. Proin non turpis at lacus tempor
        dignissim in sed leo. Nullam efficitur orci dui, eu scelerisque lorem
        tempus sed. Nullam congue velit auctor, faucibus nulla at, pellentesque
        risus. Integer posuere ut nisi eu tincidunt. Sed nec sapien quis sem
        rutrum lobortis. Nullam dignissim ante non tortor feugiat feugiat. Duis
        vel leo vel orci accumsan suscipit in non quam.
      </p>
    </Disclaimer>
    <PageFooter
      siteOwner="Cats Cradle"
      links={[
        { url: 'https://example.com', label: 'Lobortis scelerisque' },
        { url: 'https://example.com', label: 'Lorem ipsum dolor' },
        { url: 'https://example.com', label: 'Amet consectetur.' },
        { url: 'https://example.com', label: 'Porta lorem mollis' },
        { url: 'https://example.com', label: 'Aliquam ut porttitor ' },
      ]}
    />
  </>
);
