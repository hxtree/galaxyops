'use client';
import React from 'react';
import { useState } from 'react';
import {
  CardContent,
  Card,
  Grid,
  Stack,
  Button,
  NonInteractiveLink,
  Typography,
  LoadingButton,
} from '@cats-cradle/design-system';
import { Code } from './Code';

export type ApiClientProps = {
  loading: boolean;
  title: string;
  description: string;
  url: string;
  response: string;
  // buttons: [
  //   label:
  //   onClick: 0
  //   selected: boolean,
  // ],
  submitLabel: string;
};

export const ApiClient = (props: ApiClientProps) => {
  const [count, setCount] = useState(0);

  return (
    <Card
      elevation={5}
      sx={{
        m: 4,
        px: 4,
        py: 2,
        borderRadius: '12px',
      }}
    >
      <CardContent>
        <Typography paragraph>
          <b>{props.title}</b>
        </Typography>
        <Typography paragraph>{props.description}</Typography>

        <Typography paragraph>
          <NonInteractiveLink>{props.url}</NonInteractiveLink>
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
                loading={props.loading}
                size="small"
                color="primary"
                variant="contained"
              >
                {props.submitLabel}
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
        {!props.loading && props.response.length > 0 && (
          <Code code={props.response} language="json" />
        )}
      </CardContent>
    </Card>
  );
};
