import React from 'react';
import { Meta } from '@storybook/react';
import {
  Article,
  AppBar,
  Button,
  Typography,
  Alert,
  PageFooter,
  Link,
  faArrowRight,
  FontAwesomeIcon,
  HeroBanner,
  AlertSeverity,
} from '../../src/main';

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
  title: 'Pages/TopicFront',
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
    <HeroBanner
      heading={'Et malesuada fames ac turpis.'}
      lead={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula metus quis sagittis malesuada. Nulla facilisi. Duis feugiat tellus eu justo hendrerit, nec congue odio congue.'
      }
      image={'/sample.jpg'}
    ></HeroBanner>
    <div className="container">
      <Alert severity={AlertSeverity.INFO}>
        Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
      </Alert>
    </div>

    <Article className="my-5">
      <Typography variant="h2">Vestibulum</Typography>
      <Typography variant="body">
        Integer malesuada justo eu metus tincidunt, quis luctus elit posuere.
        Morbi et ipsum euismod, sodales ante in, feugiat justo. Vivamus sed
        suscipit felis. Sed ut lectus ut arcu laoreet ultricies vel in nulla.
        Etiam vel diam vel felis dignissim luctus. Integer bibendum fringilla
        justo, vitae facilisis eros convallis vel. Sed ac tellus vel dui finibus
        pellentesque. Nullam id elit eu urna ullamcorper bibendum. Sed nec ex
        nec lectus finibus bibendum ac eget nunc. Vivamus eu dolor vel sem
        lacinia vestibulum. In hac habitasse platea dictumst. Curabitur sit amet
        augue nec velit eleifend lobortis.{' '}
      </Typography>

      <Typography variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit
        egestas dui id ornare arcu. Leo vel orci porta non pulvinar neque
        laoreet suspendisse interdum. Consectetur libero id faucibus nisl. Metus
        aliquam eleifend mi in nulla. Sapien faucibus et molestie ac feugiat sed
        lectus vestibulum mattis. In hac habitasse platea dictumst quisque
        sagittis purus. Dictumst quisque sagittis purus sit amet. Amet dictum
        sit amet justo donec enim diam vulputate ut. Commodo ullamcorper a lacus
        vestibulum sed. At varius vel pharetra vel turpis. Cras ornare arcu dui
        vivamus arcu felis bibendum. Vitae proin sagittis nisl rhoncus mattis.
        Condimentum id venenatis a condimentum{' '}
        <Link href="/">vitae sapien</Link>. Integer vitae justo eget magna
        fermentum.
      </Typography>
      <Button href="/example" color="primary">
        Tincidunt arcu <FontAwesomeIcon icon={faArrowRight} />
      </Button>
      <Button href="/example" color="secondary">
        Congue nisi
      </Button>
    </Article>

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
