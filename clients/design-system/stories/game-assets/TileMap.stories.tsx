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
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 2],
    ],
    [[1, 1, 1, 1, 1, 1, 1], [1], [1, 10, 9, 9], [1, 10, 9, 9], [1], [1]],
  ],
  cameraPosition: { x: 0, y: 0, z: 0 },
  variant: TileMapVariant.DEFAULT,
} as TileMapProps;
