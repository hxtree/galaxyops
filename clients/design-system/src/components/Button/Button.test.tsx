import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Button } from './Button';

describe('Button', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Button testId="test">Test</Button>
    );
    const testButton = await screen.findByTestId('test-button');
    expect(testButton).toBeTruthy();
  });

  it('should not set any data-testid when testId null', () => {
    const { container } = render(<Button>Test</Button>)
    const traverseDOM = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        expect((node as Element).hasAttribute('data-testid')).toBeFalsy();
        node.childNodes.forEach(childNode => traverseDOM(childNode));
      }
    };
    traverseDOM(container);
  })

  it('should create data-analytics attribute', async () => {
    const analytics = new Analytics();

    render(
      <Button
        testId="test"
        ref={ref => analytics.set(ref, 'TestButton')}>
          Test
      </Button>
    );
    const testButton = await screen.findByTestId('test-button');
    expect(testButton.getAttribute('data-analytics')).toBe('test-button');
  });
});
