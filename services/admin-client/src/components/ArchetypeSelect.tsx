import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  CodeSnippet,
  CodeSnippetLanguages,
} from '@cats-cradle/design-system/dist/main';

export default function ArchetypeSelect() {
  const [archetypes, setArchetypes] = useState<string[]>([]);
  const [archetypeId, setArchetypeId] = useState<string>();
  const [archetypeData, setArchetypeData] = useState<object>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const archetypesFetch = async () => {
      setLoading(true);

      const res = await axios.get(
        'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/character/archetypes',
      );

      setArchetypes(res.data);
      setLoading(false);
    };
    archetypesFetch();
  }, []);

  const fetchArchetypeData = async (archetypeId: string) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/character/archetypes/${archetypeId}`,
      );

      const result = await res.data.json;
      setArchetypeData(result);
      setLoading(false);
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setArchetypeId(value);
    fetchArchetypeData(value);
  };

  return (
    <>
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
      {archetypeData && (
        <CodeSnippet
          data={JSON.stringify(archetypeData, null, 2)}
          language={CodeSnippetLanguages.JSON}
        />
      )}
      {isLoading && 'loading'}
    </>
  );
}
