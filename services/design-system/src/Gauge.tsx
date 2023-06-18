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
  const leftPaths = `M${xStartPoint},${yStartPoint}
    a${radius},${radius} 0 1,0 -${radius},${radius}
    m 0, 0 h ${width}
    `;

  const rightXLineEndPoint = width - radius;
  const rightXStartPoint = width - radius - strokeWidth / 2;
  const rightYStartPoint = radius * 2 + strokeWidth / 2;
  const rightPaths = `M${rightXStartPoint},${rightYStartPoint}
    a${radius},${radius} 0 1,0 -${radius},-${radius}
    m ${radius}, ${radius} h -${rightXLineEndPoint}
    `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      {props.boundingBox && <rect width={width} height={height} />}
      {isLeft && (
        <path
          fill="pink"
          stroke={color}
          stroke-width={strokeWidth}
          d={leftPaths}
        />
      )}
      {isRight && (
        <path
          fill="pink"
          stroke={color}
          stroke-width={strokeWidth}
          d={rightPaths}
        />
      )}
    </svg>
  );
};

/**
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 14.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 43363)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="612px" height="792px" viewBox="0 0 612 792" enable-background="new 0 0 612 792" xml:space="preserve">
<path fill="#39B54A" stroke="#000000" d="M557.3,543.6c81.6,0,147.7-66.4,147.7-148.1c0-81.8-66.3-148.1-148.1-148.1
	s-148.1,66.3-148.1,148.1c0,0.2,0,0.4,0,0.5l49.3-0.5c0-54.5,44.2-98.7,98.7-98.7c54.5,0,98.7,44.2,98.7,98.7s-44.2,98.7-98.7,98.7
	l-649.6,0l-1.4,49.4H557.3z"/>
</svg>

 */
