import React from 'react';

export type GaugeProps = {
  color?: string;
  stroke?: number;
  current?: number;
  max?: number;
  mirror?: boolean; // determine whether right or left orientation
};

export const Gauge = (props: GaugeProps) => {
  const stroke = props.stroke ?? 7;
  const strokeColor = 'blue';
  const isRight = true;
  const isLeft = false; //true;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path
        fill="none"
        stroke="red"
        stroke-width={stroke}
        d="M20,0 a20,20 0 0,1 20,20"
      />
      {isLeft && (
        <path
          fill="none"
          stroke="blue"
          stroke-width={stroke}
          d="M40,20 a20,20 0 0,4 -20,20"
        />
      )}
      {isRight && (
        <path
          fill="none"
          stroke="green"
          stroke-width={stroke}
          d="M20,40 a20,20 0 0,1 -20,-20"
        />
      )}
      <path
        fill="none"
        stroke="yellow"
        stroke-width={stroke}
        d="M0,20 a20,20 0 0,1 20,-20"
      />
      <line
        x1="20"
        y1="40"
        x2="100"
        y2="40"
        stroke="black"
        stroke-width={stroke}
      />
    </svg>
  );
};
