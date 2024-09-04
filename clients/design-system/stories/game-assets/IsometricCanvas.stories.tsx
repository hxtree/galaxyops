import React from 'react';
import { Meta } from '@storybook/react';
import { IsometricCanvas, IsometricCanvasProps } from '../../src/main';

export default {
  title: 'Game Assets/HUD/IsometricCanvas',
  component: IsometricCanvas,
} as Meta<typeof IsometricCanvas>;

export const Default = (args: IsometricCanvasProps) => (
  <IsometricCanvas {...args} />
);

Default.args = {
  spriteMapSrc: '/tileset.png',
  spriteMapColumns: 4,
  grid: [
    [
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 2],
    ],
    [[1, 1, 1, 1, 1, 1, 1], [1], [1, 10, 9, 9], [1, 10, 9, 9], [1], [1]],
    [[1, 1, 1, 1, 1, 1, 1], [1], [1], [1], [1], [1]],
    [[1, 1, 1, 1, 1, 1, 1], [1], [1], [1], [1], [1]],
  ],
  cameraPosition: { x: 0, y: 0, z: 0 },
} as IsometricCanvasProps;
