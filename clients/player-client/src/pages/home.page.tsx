import {
  IsometricCanvas,
  IsometricCanvasProps,
} from '@galaxyops/design-system/dist/main';
import gameState from './game-state.json';

export default function HomePage() {
  return (
    <>
      {/* @ts-expect-error needed for types temp */}
      <IsometricCanvas {...(gameState as IsometricCanvasProps)} />
    </>
  );
}
