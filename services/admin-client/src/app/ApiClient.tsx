'use client';
import Prism from 'prismjs';
import React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  CardContent,
  Card,
  Grid,
  Stack,
  Button,
  NonInteractiveLink,
  Typography,
  LoadingButton,
} from '@cats-cradle/design-system';
import { CodeSnippet, CodeSnippetLanguages } from './CodeSnippet';

// import './styles/prism-custom.css';

// require('prismjs/components/prism-json');

export type ApiClientOptionProps = {
  label: string;
  displayUrl: string;
  endpoint: string;
};

export type ApiClientProps = {
  title: string;
  description: string;
  options: ApiClientOptionProps[];
  submitLabel: string;
};

export const ApiClient = (props: ApiClientProps) => {
  const { options, ...otherProps } = props;
  const [selection, setSelection] = useState(0);
  const [displayUrl, setDisplayUrl] = useState(options[selection].displayUrl);
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const callApi = async () => {
    try {
      setLoading(true);
      const res = await fetch(options[selection].endpoint);
      const result = await res.json();

      setData(result);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  function changeSelection(index: number) {
    setSelection(index);
    setDisplayUrl(options[index].displayUrl);
    if (index !== selection) {
      setData('');
    }
  }

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

        <Box sx={{ mb: 2 }}>
          <NonInteractiveLink>{displayUrl}</NonInteractiveLink>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={8} justifyContent="flex-end">
            <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              {props.options.map((e: ApiClientOptionProps, index: any) => (
                <Button
                  key={index}
                  sx={{ mr: { sm: 1 }, mb: 1 }}
                  size="small"
                  selected={selection === index}
                  onClick={() => changeSelection(index)}
                >
                  {e.label}
                </Button>
              ))}
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
                loading={isLoading}
                size="small"
                color="primary"
                variant="contained"
                onClick={callApi}
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
        {!isLoading && data && (
          <CodeSnippet
            data={data}
            language={CodeSnippetLanguages.JSON}
          ></CodeSnippet>
        )}
      </CardContent>
    </Card>
  );
};
