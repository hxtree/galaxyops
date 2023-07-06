'use client';
import styles from './page.module.css';
import { Stack, Container, Link } from '@cats-cradle/design-system';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <Stack>
            <Link href="/dice">Dice</Link>
            <Link href="/archetype">Archetypes</Link>
            <Link href="/character-sheet">Character Sheets</Link>
            <Link href="/weather">Weather</Link>
          </Stack>
        </Container>
      </div>
    </main>
  );
}
