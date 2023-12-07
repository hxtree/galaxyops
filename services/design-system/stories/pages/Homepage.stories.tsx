import React from 'react';
import { Meta } from '@storybook/react';
import { AppBar, Button, Typography, Alert, Toolbar, IconButton, FontAwesomeIcon, faBars, faGithub, PageFooter } from '../../src';

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
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <IconButton
          href="https://github.com/hxtree/cats-cradle"
          color="inherit"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Alert severity="info">
      Online system will be down for maintenance from 11:00 pm to 11:15 pm today
    </Alert>
    <Typography variant="h1">Game Master Portal</Typography>
    <Button href="/example" color="primary">
      Learn More
    </Button>
    <PageFooter siteOwner='Cats Cradle' links={[]}/>
  </>
);
