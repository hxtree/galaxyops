import React, { useState } from 'react';
import { IsometricCanvas, IsometricCanvasProps } from '../core/IsometricCanvas';
import gameState from './data/Sewer.json';
import { InputProvider } from '../context/Input/InputProvider';
import { Keyboard } from '../core/Keyboard/Keyboard';
import { GameEngine } from '../core/GameEngine/GameEngine';

export default function HomePage() {
  const [gameData, setGameData] = useState({ input: '', playerPosition: 0 });

  const updateGameData = (newData: any) => {
    setGameData(newData);
  };

  return (
    <InputProvider>
      <Keyboard />
      <GameEngine data={gameData} updateData={updateGameData} />

      {/** TODO use gameData={gameData} */}
      {/* @ts-expect-error needed for types temp */}
      <IsometricCanvas {...(gameState as IsometricCanvasProps)} />
    </InputProvider>
  );
}
