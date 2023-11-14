'use client';

import styles from '../src/app/page.module.css';
import { Container } from '@cats-cradle/design-system';

export default function CharacterSheet() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Character Sheets</h1>
        </Container>
      </div>
    </main>
  );
}
