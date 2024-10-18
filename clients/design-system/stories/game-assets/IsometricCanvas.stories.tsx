import React from 'react';
import { Meta } from '@storybook/react';
import { IsometricCanvas, IsometricCanvasProps } from '../../src/main';
import * as TrainCarData from './data/TrainCar.json';
import * as TrainRoomData from './data/TrainRoom.json';
import * as TrainStorageCarData from './data/TrainStorageCar.json';

export default {
  title: 'Game Assets/IsometricCanvas',
  component: IsometricCanvas,
} as Meta<typeof IsometricCanvas>;

export const TrainCar = (args: IsometricCanvasProps) => (
  <IsometricCanvas {...args} />
);

TrainCar.args = TrainCarData as IsometricCanvasProps;

export const TrainRoom = (args: IsometricCanvasProps) => (
  <IsometricCanvas {...args} />
);

TrainRoom.args = TrainRoomData as IsometricCanvasProps;

export const TrainStorageCar = (args: IsometricCanvasProps) => (
  <IsometricCanvas {...args} />
);

TrainStorageCar.args = TrainStorageCarData as IsometricCanvasProps;
