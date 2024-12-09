import {
  IsometricCanvas,
  IsometricCanvasProps,
} from '@galaxyops/design-system/dist/main';
import gameState from './game-state.json';
import useHandleInput from '../core/useHandleInput';

export default function HomePage() {
  const input = useHandleInput();

  return (
    <>
      {input && <div>Input: {input?.map(i => i.key).join(', ')}</div>}
      {/* @ts-expect-error needed for types temp */}
      <IsometricCanvas {...(gameState as IsometricCanvasProps)} />
    </>
  );
}
