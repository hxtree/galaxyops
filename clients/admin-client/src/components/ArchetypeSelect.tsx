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
  CodeSnippetLanguages
} from '@cats-cradle/design-system/dist/main';

// ... (imports remain the same)

export default function ArchetypeSelect() {
  const [archetypes, setArchetypes] = useState<string[]>([]);
  const [archetypeId, setArchetypeId] = useState<string>("");
  const [archetypeData, setArchetypeData] = useState<object>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const archetypesFetch = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          'https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/character/archetypes',
        );

        setArchetypes(res.data);
      } catch (err) {
        console.error("Error fetching archetypes:", err.message);
      } finally {
        setLoading(false);
      }
    };

    archetypesFetch();
  }, []);

  const fetchArchetypeData = async (archetypeId: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://nx7uv2rfy4.execute-api.us-east-2.amazonaws.com/default/v1/character/archetypes/${archetypeId}`,
      );

      setArchetypeData(res.data);
    } catch (err) {
      const error = err as Error;
      console.error("Error fetching archetype data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    const {
      target: { value },
    } = event;
    setArchetypeId(value as string);
    await fetchArchetypeData(value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="archetype-id-label">Archetype</InputLabel>
        <Select
          labelId="archetype-id-label"
          id="archetype-id"
          onChange={(event) => handleChange(event)}
          input={<OutlinedInput label="Archetype" />}
        >
          {archetypes && archetypes.map(archetype => (
            <MenuItem key={archetype} value={archetype}>
              {archetype}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {archetypeData && Object.keys(archetypeData).length > 0 && (
        <>
          <CodeSnippet
            data={JSON.stringify(archetypeData, null, 2)}
            language={CodeSnippetLanguages.JSON}
          />
        </>
      )}
      {isLoading && 'loading'}
    </>
  );
}

