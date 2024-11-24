import { IsometricCanvas } from '@galaxyops/design-system/dist/main';
import gameState from './game-state.json';

export default function HomePage() {
  return (
    <>
      <main className="container mt-5">
        <IsometricCanvas args={gameState} />
      </main>
    </>
  );
}
