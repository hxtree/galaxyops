import { SpacerProps } from '../Spacer/SpacerProps.type';

export type DataPoint = {
  number: string;
  description: string;
};

export type DataHighlightsProps = {
  data: DataPoint[];
  spacing?: SpacerProps;
};
