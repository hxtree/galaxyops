import React, { useState } from 'react';
import { IsometricCanvas, IsometricCanvasProps } from '../core/IsometricCanvas';
import gameStateRaw from './data/Sewer.json';
import { InputProvider } from '../context/Input/InputProvider';
import { Keyboard } from '../core/Keyboard/Keyboard';
import { GameEngine } from '../core/GameEngine/GameEngine';
import { plainToClass } from 'class-transformer';
import { GameState } from '../dtos/GameState.dto';

export default function HomePage() {
  const [gameData, setGameData] = useState<IsometricCanvasProps>(() => {
    return plainToClass(GameState, gameStateRaw);
  });

  const updateGameData = (newData: any) => {
    setGameData(newData);
  };

  return (
    <InputProvider>
      <Keyboard />
      <GameEngine data={gameData} updateData={updateGameData} />
      <IsometricCanvas {...gameData} />
    </InputProvider>
  );
}
