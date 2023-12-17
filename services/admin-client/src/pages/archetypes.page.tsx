import { Container } from '@cats-cradle/design-system/dist/main';
import ArchetypeSelect from '../components/ArchetypeSelect';

export default function ArchetypePage() {
  return (
    <>
     <main>
       <div>
        <Container>
          <h1>Archetypes</h1>
          <p>
            Archetypes act as the foundation and recipe for character sheets,
            shaping their capabilities and limitations. Each character sheet
            inherits traits from a specific archetype, determining their
            potential and defining what they can and cannot learn. Archetype
            information is not stored in the database, but it serves as a
            crucial guide for player and non-player character creation.
          </p>
          <ArchetypeSelect />
        </Container>
       </div>
    </main>
    </>
  );
}
