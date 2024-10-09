import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  const TestComponent: React.FC<{ isLocked: boolean }> = ({ isLocked }) => {
    useBodyScrollLock(isLocked);
    return <div>Test Component</div>;
  };
  let originalOverflow: string;

  beforeEach(() => {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'block';
  });

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
  });

  it('should not lock body scroll when isLocked is false', () => {
    render(<TestComponent isLocked={false} />);
    expect(document.body.style.overflow).toBe('block');
  });

  it('should locks body scroll when isLocked is true', () => {
    render(<TestComponent isLocked={true} />);
    expect(document.body.style.overflow).toBe('hidden');
  });
});
