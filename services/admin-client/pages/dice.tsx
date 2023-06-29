'use client';
import styles from '../src/app/page.module.css';
import { Container } from '@cats-cradle/design-system';
import DiceAnalyzer from '../components/DiceAnalyzer';

export default function Dice() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Dice Notation Analyzer</h1>
          <p>
            This web tool determines the appropriate dice notation for skill set
            rolls and visualizes the impact of luck. Gain valuable insights into
            chance's influence on gameplay outcomes.
          </p>
          <DiceAnalyzer />
        </Container>
      </div>
    </main>
  );
}
