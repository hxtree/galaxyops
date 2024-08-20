import React from 'react';
import { Meta } from '@storybook/react';
import { TileMap, TileMapProps, TileMapVariant } from '../../src/main';

export default {
  title: 'Game Assets/HUD/TileMap',
  component: TileMap,
} as Meta<typeof TileMap>;

export const Default = (args: TileMapProps) => <TileMap {...args} />;

Default.args = {
  tileset: '/tileset.png',
  columns: 4,
  map: [
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
      [5, 5, 5, 5],
      [6, 6, 6, 6],
    ],
    [[7, 7, 7, 7]],
  ],
  cameraPosition: { x: 0, y: 0, z: 0 },
  variant: TileMapVariant.DEFAULT,
} as TileMapProps;
