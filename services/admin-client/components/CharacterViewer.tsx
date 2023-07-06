'use client';
import { useState } from 'react';
import { Stack, Grid, Box, TextField } from '@cats-cradle/design-system';

export default function CharacterViewer() {
  const [keyword, setKeyword] = useState<string>('MEEKU_ONI');
  const [characterId, setCharacterId] = useState<string>('MEEKU_ONI');
  const [isLoading, setLoading] = useState<boolean>(false);

  const callApi = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/luck-by-dice/dice-roll',
        {
          body: JSON.stringify({
            keyword: keyword,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      );
      const result = await res.json();

      setLoading(false);
    } catch (err) {
      const error = err as Error;
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Stack>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="Character"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                variant="standard"
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
