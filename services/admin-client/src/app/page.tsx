'use client';
import { useState } from 'react';
import styles from './page.module.css';
import {
  styled,
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Container,
  FontAwesomeIcon,
  faCog,
  faBars,
  faBook,
  faDice,
  faAddressCard,
  IconButton,
  AppBarProps as MuiAppBarProps,
  AppBar as MuiAppBar,
  useTheme,
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@cats-cradle/design-system';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cats Cradle
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            ) : (
              <FontAwesomeIcon icon={faChevronCircleRight} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={'Dice'} disablePadding>
            <ListItemButton href="/dice">
              <ListItemIcon>
                <FontAwesomeIcon icon={faDice} />
              </ListItemIcon>
              <ListItemText primary={'Dice'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Archetypes'} disablePadding>
            <ListItemButton href="/archetypes">
              <ListItemIcon>
                <FontAwesomeIcon icon={faBook} />
              </ListItemIcon>
              <ListItemText primary={'Archetypes'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Character Sheets'} disablePadding>
            <ListItemButton href="/character-sheets">
              <ListItemIcon>
                <FontAwesomeIcon icon={faAddressCard} />
              </ListItemIcon>
              <ListItemText primary={'Character Sheets'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Weather'} disablePadding>
            <ListItemButton href="/weather">
              <ListItemIcon>
                <FontAwesomeIcon icon={faCog} />
              </ListItemIcon>
              <ListItemText primary={'Weather'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>Game admin client tools</Typography>
      </Main>
    </Box>
  );
}
