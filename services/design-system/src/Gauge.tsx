import React from 'react';

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

export const Gauge = (props: GaugeProps) => {
  const width = props.width ?? 150;
  const height = props.height ?? 50;
  const strokeWidth = props.strokeWidth ?? 7;
  const color = props.color ?? 'green';
  const isLeft = props.orientation === OrientationType.LEFT;
  const isRight = props.orientation !== OrientationType.LEFT;

  const diameter = height - strokeWidth;
  const radius = diameter / 2;

  const yStartPoint = radius + strokeWidth / 2;
  const xStartPoint = radius * 2 + strokeWidth / 2;
  const leftPaths = `M${xStartPoint},${yStartPoint}  a${radius},${radius} 0 1,0 -${radius},${radius}`;

  const rightXLineStartPoint = 0;
  const rightXLineEndPoint = width - radius;
  const rightXStartPoint = width - radius - strokeWidth / 2;
  const rightYStartPoint = radius * 2 + strokeWidth / 2;
  const rightPaths = `M${rightXStartPoint},${rightYStartPoint} a${radius},${radius} 0 1,0 -${radius},-${radius}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      {props.boundingBox && <rect width={width} height={height} />}
      {isLeft && (
        <>
          <path
            fill="none"
            stroke={color}
            stroke-width={strokeWidth}
            d={leftPaths}
          />
          <line
            x1={yStartPoint}
            y1={xStartPoint}
            x2={width}
            y2={xStartPoint}
            stroke={color}
            stroke-width={strokeWidth}
          />
        </>
      )}
      {isRight && (
        <>
          <path
            fill="none"
            stroke={color}
            stroke-width={strokeWidth}
            d={rightPaths}
          />
          <line
            x1={rightXLineStartPoint}
            y1={xStartPoint}
            x2={rightXLineEndPoint}
            y2={xStartPoint}
            stroke={color}
            stroke-width={strokeWidth}
          />
        </>
      )}
    </svg>
  );
};
