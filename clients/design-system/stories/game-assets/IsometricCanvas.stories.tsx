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
  },
  grid: [
    [
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b2', 'b2', 'b2', 'b2', 'b2', 'b2', 'b2'],
      ['b0', 'b0', 'b0', 'b0', 'b2'],
    ],
    [
      ['b1', 'b1', 'b1', 'b1', 'b1', 'c1', 'b1'],
      ['b1'],
      ['b1', 'b10', 'b9', 'b9'],
      ['b1', 'b10', 'b9', 'b9'],
      ['b1'],
      ['b1'],
    ],
    [
      ['b1', 'b1', 'b1', 'b1', 'b1', '0', 'b1'],
      ['b1'],
      ['b1'],
      ['b1'],
      ['b1'],
      ['b1'],
    ],
    [
      ['b1', 'b1', 'b1', 'b1', 'b1', '0', 'b1'],
      ['b1'],
      ['b1'],
      ['b1'],
      ['b1'],
      ['b1'],
    ],
  ],
  cameraPosition: { x: 0, y: 0, z: 0 },
} as IsometricCanvasProps;
