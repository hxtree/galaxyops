import { SpacerProps } from '../Spacer/SpacerProps.type';

export interface HeroProps {
  breadcrumb?: React.ReactNode;
  heading: string;
  lead: string;
  image: string; // TODO change to background image
  imageRight?: string;
  children?: React.ReactNode;
  pageTier?: number;
  toolbar?: React.ReactNode;
  spacing?: SpacerProps;
}
