'use client';
import { useState } from 'react';
import styles from '../src/app/page.module.css';
import { Chart, Container, Link } from '@cats-cradle/design-system';
import DiceMonitor from '../components/DiceMonitor';

export default function Dice() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container>
          <h1>Demo Page</h1>
          <DiceMonitor />
        </Container>
      </div>
    </main>
  );
}
