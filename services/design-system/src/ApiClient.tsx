import React from 'react';
import { Button } from './Button';
import { NonInteractiveLink } from './NonInteractiveLink';
import { Code } from './Code';
import { Typography } from './Typography';
import { LoadingButton } from './LoadingButton';
import { CardContent, Card, Grid, Stack } from '@mui/material';

export type ApiClientProps = {
  title: string;
  description: string;
  url: string;
  response: string;
  loading: boolean;
  // buttons: [
  //   label:
  //   onClick: 0
  //   selected: boolean,
  // ],
  submitButton: string;
};

export const ApiClient = (props: ApiClientProps) => {
  const { title, response, description, url, loading, ...muiProps } = props;

  return (
    <Card elevation={5} sx={{ m: 4, px: 4, py: 2, borderRadius: '12px' }}>
      <CardContent>
        <Typography paragraph>
          <b>{title}</b>
        </Typography>
        <Typography paragraph>{description}</Typography>

        <Typography paragraph>
          <NonInteractiveLink>{url}</NonInteractiveLink>
        </Typography>

        <Grid container>
          <Grid item xs={12} sm={8} spacing={2} justifyContent="flex-end">
            <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                sx={{ mr: { sm: 1 }, mb: 1 }}
                size="small"
                selected={true}
              >
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
              <LoadingButton
                loading={loading}
                size="small"
                color="primary"
                variant="contained"
              >
                Run Query
              </LoadingButton>
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
        <Code code={response} language="json" />
      </CardContent>
    </Card>
  );
};
