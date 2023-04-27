import React from 'react';

export enum OrientationType {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export type GaugeProps = {
  color?: string;
  strokeWidth?: number;
  orientation?: OrientationType;
  current?: number;
  max?: number;
};

export const Gauge = (props: GaugeProps) => {
  const strokeWidth = props.strokeWidth ?? 7;
  const color = props.color ?? 'green';
  const isLeft = props.orientation === OrientationType.LEFT;
  const isRight = props.orientation !== OrientationType.LEFT;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      {isLeft && (
        <>
          <path
            fill="none"
            stroke={color}
            stroke-width={strokeWidth}
            d="M50,30 a20,20 0 1,0 -20,20"
          />
          <line
            x1="30"
            y1="50"
            x2="120"
            y2="50"
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
            d="M120,50 a20,20 0 1,0 -20,-20"
          />
          <line
            x1="20"
            y1="50"
            x2="120"
            y2="50"
            stroke={color}
            stroke-width={strokeWidth}
          />
        </>
      )}
    </svg>
  );
};
