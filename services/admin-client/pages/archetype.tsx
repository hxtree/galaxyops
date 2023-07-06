'use client';
import styles from '../src/app/page.module.css';
import { Container } from '@cats-cradle/design-system';
import ArchetypeSelect from '../components/ArchetypeSelect';

export default function Archetype() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Archetypes</h1>
          <ArchetypeSelect />
        </Container>
      </div>
    </main>
  );
}
