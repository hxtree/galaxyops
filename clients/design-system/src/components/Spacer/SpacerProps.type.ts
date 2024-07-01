export type SpacerProps = {
  top?: 0 | 1 | 2 | 3 | 4 | 5;
  right?: 0 | 1 | 2 | 3 | 4 | 5;
  bottom?: 0 | 1 | 2 | 3 | 4 | 5;
  left?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  children?: React.ReactNode;
  testId?: string | null;
};
