import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Alert, AlertSeverity } from './Alert';

describe('Alert', () => {

  it.each([
    'severity',
  ])('renders data-testid for %s suffix', (testIdSuffix: string) => {
    render(<Alert severity={AlertSeverity.DANGER} testId={'alert'}>Message</Alert>);

    const ele = screen.getByTestId(`alert-${testIdSuffix}`);
    expect(ele).toBeInTheDocument();
  })

  it('should not set any data-testid when testId null', () => {
    const { container } = render(<Alert severity={AlertSeverity.WARNING}>Message</Alert>)
    const traverseDOM = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        expect((node as Element).hasAttribute('data-testid')).toBeFalsy();
        node.childNodes.forEach(childNode => traverseDOM(childNode));
      }
    };
    traverseDOM(container);
  })

  it.each([
    AlertSeverity.WARNING,
    AlertSeverity.DANGER,
    AlertSeverity.INFO,
    AlertSeverity.SUCCESS,
  ])('renders with correct severity %s', (severity: AlertSeverity) => {
    render(<Alert severity={severity} testId={'alert'}>Warning</Alert>);

    const ele = screen.getByTestId('alert-severity');
    expect(ele).toHaveClass(`alert-${severity}`);
  })

})