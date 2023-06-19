import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../../../src/Button';
import { NonInteractiveLink } from '../../../src/NonInteractiveLink';
import { Code } from '../../../src/Code';
import { Typography } from '../../../src/Typography';
import { CardContent, Card, Grid, Stack } from '@mui/material';

export default {
  title: 'Organisms/SimpleRestClient',
  component: Button,
} as Meta<typeof Button>;

const code = `{
  "success": true,
  "error": null,
  "response" : [
    {
      "type": "Feature",
      "id": "44.96,-93.37",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.27,
          44.96
        ]
      }
    }
  ]
}`;

export const Primary = args => (
  <Card elevation={5} sx={{ m: 4, px: 4, py: 2, borderRadius: '12px' }}>
    <CardContent>
      <Typography paragraph>
        <b>Try out the route action</b>
      </Typography>
      <Typography paragraph>
        Select an endpoint and run query to see an API response using a sample
        route request.
      </Typography>

      <Typography paragraph>
        <NonInteractiveLink>
          https://api.aerisapi.com/forecasts/:auto?format=json&filter=day&limit=7&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]
        </NonInteractiveLink>
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={8} spacing={2} justifyContent="flex-end">
          <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button sx={{ mr: { sm: 1 }, mb: 1 }} size="small" selected={true}>
              Conditions
            </Button>
            <Button sx={{ mr: { sm: 1 }, mb: 1 }} size="small">
              Forecasts
            </Button>
            <Button sx={{ mr: { sm: 1 }, mb: 1 }} size="small">
              Alerts
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack
            sx={{
              justifyContent: 'flex-end',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Button size="small" color="primary" variant="contained">
              Run Query
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>

    <CardContent
      sx={{
        backgroundColor: '#102b40',
        ml: -10,
        mb: -5,
        mr: -10,
        mt: 0,
        p: 10,
        pt: 0,
      }}
    >
      <Code code={code} language="json" />
    </CardContent>
  </Card>
);
