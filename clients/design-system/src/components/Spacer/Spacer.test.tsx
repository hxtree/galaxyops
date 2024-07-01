import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Spacer } from './Spacer';

describe('Spacer component', () => {
  it('renders children without spacing when no props are provided', () => {
    const { container } = render(
      <Spacer>
        <div>Hello World</div>
      </Spacer>,
    );
    expect(container.firstChild).toHaveTextContent('Hello World');
    expect(container.firstChild).not.toHaveClass('mt-');
    expect(container.firstChild).not.toHaveClass('me-');
    expect(container.firstChild).not.toHaveClass('mb-');
    expect(container.firstChild).not.toHaveClass('ms-');
  });

  it('renders children with correct spacing classes when props are provided', () => {
    const { container } = render(
      <Spacer top={3} right={4} bottom={2} left={1}>
        <div>Hello World</div>
      </Spacer>,
    );
    expect(container.firstChild).toHaveClass('mt-3');
    expect(container.firstChild).toHaveClass('me-4');
    expect(container.firstChild).toHaveClass('mb-2');
    expect(container.firstChild).toHaveClass('ms-1');
  });

  it('renders only children when no spacing props are provided', () => {
    const { container } = render(
      <Spacer>
        <div>Hello World</div>
      </Spacer>,
    );
    // Ensure no Bootstrap 5 spacing classes are applied
    expect(container.firstChild).not.toHaveClass('mt-');
    expect(container.firstChild).not.toHaveClass('me-');
    expect(container.firstChild).not.toHaveClass('mb-');
    expect(container.firstChild).not.toHaveClass('ms-');

    // Ensure no extra div is rendered around children
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(container.firstChild?.childNodes.length).toBe(1); // Only one child element
    expect(container.firstChild?.firstChild?.textContent).toBe('Hello World');
  });
});
