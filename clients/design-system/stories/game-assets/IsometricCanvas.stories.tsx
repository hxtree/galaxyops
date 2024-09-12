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
  spriteMapRegistry: {
    b: '/game-assets/tileset-4x4.png',
    c: '/game-assets/door-1x1.png',
    w: '/game-assets/trainwall-8x1.png',
    n: '/game-assets/nightstand-4x3.png',
  },
  grid: [
    [
      ['w1', 'w1', 'w1', 'w7', 'w1', 'b2', 'w1'],
      ['w1', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['w1', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['w1', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['w1', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['w1', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b0', 'b0', 'b0', 'b0', 'b2'],
    ],
    [
      ['0', '0', '0', '0', '0', 'c1', '0'],
      ['0'],
      ['0', 'b10', 'b9', 'b9'],
      ['0', 'b10', 'b9', 'b9'],
      ['0'],
      ['0', 'n10'],
    ],
  ],
  cameraPosition: { x: 0, y: 0, z: 0 },
} as IsometricCanvasProps;
