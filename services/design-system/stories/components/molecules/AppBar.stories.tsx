import React from 'react';
import { Meta } from '@storybook/react';
import { AppBar, AppBarProps } from '../../../src';
import {Toolbar} from '../../../src';
import { FontAwesomeIcon, faBars, faGithub } from '../../../src';
import { IconButton } from '../../../src';
import { Typography } from '../../../src';

export default {
  title: 'Molecules/AppBar',
  component: AppBar,
} as Meta<typeof AppBar>;

export const AppBarLight = (args: AppBarProps) =>
<AppBar {...args}>
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
</AppBar>;

AppBarLight.args = {
  position:"fixed",
  style: {
    backgroundColor: ''
  }
};

export const AppBarDark = (args: AppBarProps) =>
<AppBar {...args}>
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
</AppBar>;

AppBarDark.args = {
  position:"fixed",
  style: {
    backgroundColor: '#000'
  }
};
