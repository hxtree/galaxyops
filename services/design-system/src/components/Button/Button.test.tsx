import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Button } from './Button';

describe('Button', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Button testId="test-button">Test</Button>
    );
    const testButton = await screen.findByTestId('test-button');
    expect(testButton).toBeTruthy();
  });

  it('should create data-analytics attribute', async () => {
    const analytics = new Analytics();

    render(
      <Button
        testId="test-button"
        ref={ref => analytics.set(ref, 'TestButton')}>
          Test
      </Button>
    );
    const testButton = await screen.findByTestId('test-button');
    expect(testButton.getAttribute('data-analytics')).toBe('test-button');
  });
});
