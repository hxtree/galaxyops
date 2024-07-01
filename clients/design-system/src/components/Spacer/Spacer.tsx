import React from 'react';
import { SpacerProps } from './SpacerProps.type';

export const Spacer: React.FC<SpacerProps> = props => {
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    children,
    className,
    testId,
  } = props;

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

  if (!hasSpacing && !className) {
    return <>{children}</>;
  }

  const spacerClasses = [
    normalizedTop > 0 && `mt-${normalizedTop}`,
    normalizedRight > 0 && `me-${normalizedRight}`,
    normalizedBottom > 0 && `mb-${normalizedBottom}`,
    normalizedLeft > 0 && `ms-${normalizedLeft}`,
  ].filter(Boolean);

  if (className) {
    spacerClasses.push(className);
  }

  return (
    <div className={spacerClasses.join(' ')} data-testid={testId}>
      {children}
    </div>
  );
};
