import React from 'react';
import { SpacerProps } from './SpacerProps.type';

const Spacer: React.FC<SpacerProps> = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  children,
}) => {
  // Ensure values are within the range of 0 to 5
  const normalizedTop = Math.max(0, Math.min(top, 5));
  const normalizedRight = Math.max(0, Math.min(right, 5));
  const normalizedBottom = Math.max(0, Math.min(bottom, 5));
  const normalizedLeft = Math.max(0, Math.min(left, 5));

  const hasSpacing =
    normalizedTop > 0 ||
    normalizedRight > 0 ||
    normalizedBottom > 0 ||
    normalizedLeft > 0;

  if (!hasSpacing) {
    return <>{children}</>;
  }

  const spacerClasses = [
    normalizedTop > 0 && `mt-${normalizedTop}`,
    normalizedRight > 0 && `me-${normalizedRight}`,
    normalizedBottom > 0 && `mb-${normalizedBottom}`,
    normalizedLeft > 0 && `ms-${normalizedLeft}`,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={spacerClasses}>{children}</div>;
};

export default Spacer;
