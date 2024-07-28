export type MeterProps = {
  percent: number;
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
};

export const Meter = (props: MeterProps) => {
  const percent = props.percent ?? 0.5;
  const width = props.width ?? 100;
  const height = props.height ?? 10;
  const strokeWidth = props.strokeWidth ?? 1;
  const color = props.color ?? 'lime';

  const xPos = 0 + strokeWidth / 2;
  const yPos = 0 + strokeWidth / 2;
  const fillWidth = width * percent;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect
        x={xPos}
        y={yPos}
        width={width}
        height={height}
        fill="grey"
        stroke="black"
        stroke-width={strokeWidth}
        opacity="0.2"
      />
      <rect
        x={xPos}
        y={yPos}
        width={fillWidth}
        height={height}
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

export default Meter;
