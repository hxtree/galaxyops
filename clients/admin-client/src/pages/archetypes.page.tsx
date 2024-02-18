import { Paper } from '@cats-cradle/design-system/dist/main';
import ArchetypeSelect from '../components/ArchetypeSelect';

export default function ArchetypePage() {
  return (
    <main className="container">
      <Paper elevation="1" className='p-5'>
        <h1>Archetypes</h1>
        <p>
          Archetypes serve as the fundamental blueprint for character sheets. They outline a character's abilities, potential, and constraints. Each character sheet draws inspiration from a designated archetype, shaping their possibilities and outlining the skills they can or cannot acquire. While an archetype does not detail everything, it plays a vital role in guiding both player and non-player character creation.
        </p>
        <ArchetypeSelect />
      </Paper>
    </main>
  );
}
