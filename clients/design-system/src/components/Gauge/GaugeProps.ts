export enum OrientationType {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export type GaugeProps = {
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  orientation?: OrientationType;
  current?: number;
  max?: number;
  boundingBox: boolean;
};
