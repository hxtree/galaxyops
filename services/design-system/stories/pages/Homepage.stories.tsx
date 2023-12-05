import React from 'react';
import { Meta } from '@storybook/react';
import { AppBar, Button, Typography } from '@mui/material';
import { Alert } from '../../src';

export default {
  title: 'Pages/Homepage',
  component: AppBar,
} as Meta<typeof AppBar>;

const year = new Date().getFullYear();

export const Default = () => (
  <>
    <AppBar title="Home Page"></AppBar>
    <Alert severity="info">
      Online system will be down for maintenance from 11:00 pm to 11:15 pm today
    </Alert>
    <Typography variant="h1">Game Master Portal</Typography>
    <Button href="/example" color="primary">
      Learn More
    </Button>
    <p>&copy; {year} Placeholder . All Rights Reserved.</p>
  </>
);
