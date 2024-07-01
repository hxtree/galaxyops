import {
  HeroBanner,
  Paper,
  Spacer,
} from '@cats-cradle/design-system/dist/main';
import ArchetypeSelect from '../components/ArchetypeSelect';
import { BreadCrumbs } from '../components/Breadcrumbs';

// TODO: Add toolbar
export default function ArchetypePage() {
  return (
    <>
      <HeroBanner
        image="/assets/archetype.jpg"
        background="/assets/clouds.jpg"
        breadcrumb={<BreadCrumbs />}
        heading="Archetypes"
        lead="Archetypes serve as the fundamental blueprint for character sheets."
      >
        <p>
          {' '}
          They outline a character's abilities, potential, and constraints. Each
          character sheet draws inspiration from a designated archetype, shaping
          their possibilities and outlining the skills they can or cannot
          acquire. While an archetype does not detail everything, it plays a
          vital role in guiding both player and non-player character creation.
        </p>
      </HeroBanner>
      <main className="container">
        <Spacer bottom={5}>
          <Paper elevation="1" className="p-5">
            <ArchetypeSelect />
          </Paper>
        </Spacer>
      </main>
    </>
  );
}
