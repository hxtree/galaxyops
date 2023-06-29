'use client';
import styles from '../src/app/page.module.css';
import { Container } from '@cats-cradle/design-system';
import DiceAnalyzer from '../components/DiceAnalyzer';

export default function Dice() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Character Sheets</h1>
          <p>Placeholder</p>
          <DiceAnalyzer />
        </Container>
      </div>
    </main>
  );
}
