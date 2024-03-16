import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Link } from './Link';

describe('Link', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Link testId="test"/>
    );
    const testLink = await screen.findByTestId('test-link');
    expect(testLink).toBeTruthy();
  });

  it('should not set any data-testid when testId null', () => {
    const { container } = render(<Link/>)
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
      <Link
        testId="test"
        ref={ref => analytics.set(ref, 'TestLink')}/>
    );
    const testLink = await screen.findByTestId('test-link');
    expect(testLink.getAttribute('data-analytics')).toBe('test-link');
  });
});
