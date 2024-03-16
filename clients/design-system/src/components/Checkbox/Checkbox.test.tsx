import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Checkbox testId="test"/>
    );
    const testCheckbox = await screen.findByTestId('test-checkbox');
    expect(testCheckbox).toBeTruthy();
  });

  it('should not set any data-testid when testId null', () => {
    const { container } = render(<Checkbox/>)
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
      <Checkbox
        testId="test"
        ref={ref => analytics.set(ref, 'TestCheckbox')}/>
    );
    const testCheckbox = await screen.findByTestId('test-checkbox');
    expect(testCheckbox.getAttribute('data-analytics')).toBe('test-checkbox');
  });
});
