import { IsometricCanvas, IsometricCanvasProps } from '../core/IsometricCanvas';
import gameState from './game-state.json';
import { InputProvider } from '../context/Input/InputProvider';
import { Keyboard } from '../core/Keyboard/Keyboard';

export default function HomePage() {
  return (
    <InputProvider>
      <Keyboard />
      {/* @ts-expect-error needed for types temp */}
      <IsometricCanvas {...(gameState as IsometricCanvasProps)} />
    </InputProvider>
  );
}
