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
  ActionMenu,
} from '@cats-cradle/design-system/dist/main';
import { Archetype } from '@galaxyops/character-sheet-contracts';

export default function ArchetypeSelect() {
  const [archetypes, setArchetypes] = useState<string[]>([]);
  const [archetypeId, setArchetypeId] = useState<string>('');
  const [archetypeData, setArchetypeData] = useState<Archetype>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const parentDomainName =
    import.meta.env.VITE_PARENT_DOMAIN_NAME ?? 'sandbox.nekosgate.com';

  useEffect(() => {
    const archetypesFetch = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `https://api.${parentDomainName}/character-sheets/archetypes`,
        );

        setArchetypes(res.data);
      } catch (err) {
        const error = err as unknown as Error;
        console.error('Error fetching archetypes:', error.message);
      } finally {
        setLoading(false);
      }
    };

    archetypesFetch();
  }, [parentDomainName]);

  const fetchArchetypeData = async (archetypeId: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.${parentDomainName}/character-sheets/archetypes/${archetypeId}`,
      );

      setArchetypeData(res.data);
    } catch (err) {
      const error = err as unknown as Error;
      console.error('Error fetching archetype data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (event: SelectChangeEvent<unknown>) => {
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
          onChange={event => handleChange(event)}
          input={<OutlinedInput label="Archetype" />}
          className="bg-white"
        >
          {archetypes &&
            archetypes.map(archetype => (
              <MenuItem key={archetype} value={archetype}>
                {archetype}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {archetypeData && Object.keys(archetypeData).length > 0 && (
        <>
          <h2>{archetypeId}</h2>
          <ActionMenu data={archetypeData} />
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
