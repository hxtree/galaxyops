import React from 'react';
import { Meta } from '@storybook/react';
import { AppBar, Button, Typography, Alert, Toolbar, IconButton, FontAwesomeIcon, faBars, faGithub, PageFooter, Container } from '../../src/main';

export default {
  title: 'Pages/Homepage',
  component: AppBar,
} as Meta<typeof AppBar>;


export const Default = () => (
  <>
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography>Morbi Quis</Typography>
        <IconButton
          href="https://github.com/hxtree/cats-cradle"
          color="inherit"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Alert severity="info">
    Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
    </Alert>
      <Container maxWidth="md">

      <Typography variant="h1">Et malesuada fames ac turpis.</Typography>
    <Typography variant="body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Consectetur libero id faucibus nisl. Metus aliquam eleifend mi in nulla. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. In hac habitasse platea dictumst quisque sagittis purus. Dictumst quisque sagittis purus sit amet. Amet dictum sit amet justo donec enim diam vulputate ut. Commodo ullamcorper a lacus vestibulum sed. At varius vel pharetra vel turpis. Cras ornare arcu dui vivamus arcu felis bibendum. Vitae proin sagittis nisl rhoncus mattis. Condimentum id venenatis a condimentum vitae sapien. Integer vitae justo eget magna fermentum.
    </Typography>
    <Button href="/example" color="inherit">
      Congue nisi
    </Button>
    <Button href="/example" color="primary">
      Tincidunt arcu
    </Button>
      </Container>
    <PageFooter siteOwner='Cats Cradle' links={[
      {url: 'https://example.com', label: 'Lobortis scelerisque'},
      {url: 'https://example.com', label: 'Lorem ipsum dolor'},
      {url: 'https://example.com', label: 'Amet consectetur.'},
      {url: 'https://example.com', label: 'Porta lorem mollis'},
      {url: 'https://example.com', label: 'Aliquam ut porttitor '},
    ]}/>
  </>
);
