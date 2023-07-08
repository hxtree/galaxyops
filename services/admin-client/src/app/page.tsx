'use client';
import styles from './page.module.css';
import { Container } from '@cats-cradle/design-system';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Dice Notation Analyzer</h1>
        </Container>
      </div>
    </main>
  );
}
