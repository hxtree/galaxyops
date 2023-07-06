'use client';
import { useState, useEffect } from 'react';
import {
  Stack,
  Grid,
  Box,
  TextField,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@cats-cradle/design-system';

export default function ArchetypeSelect() {
  const [archetypeId, setArchetypeId] = useState<string>('MEEKU_ONI');
  const [archetypes, setArchetypes] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const archetypesFetch = async () => {
      setLoading(true);
      const result = await (
        await fetch(
          'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/character/archetypes',
          {
            method: 'GET',
          },
        )
      ).json();

      setArchetypes(result);
      setLoading(false);
    };
    archetypesFetch();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setArchetypeId(value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="archetype-id-label">Archetype</InputLabel>
            <Select
              labelId="archetype-id-label"
              id="archetype-id"
              value={archetypeId}
              onChange={handleChange}
              input={<OutlinedInput label="Archetype" />}
            >
              {archetypes.map(archetype => (
                <MenuItem key={archetype} value={archetype}>
                  {archetype}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
