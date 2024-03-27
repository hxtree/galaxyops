import React from 'react';
import { GradientVariant } from './GradientVariant.enum';
import '@cats-cradle/promare-gradients/dist/css/promare-gradients.css';

export interface GradientProps {
  variant: GradientVariant;
  children?: React.ReactNode;
}

export const Gradient = (props: GradientProps) => {
  const { variant, children } = props;

  const classNames = [];

  classNames.push(variant.toString())

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
}