import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Link } from './Link';

describe('Link', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Link testId="test-link"/>
    );
    const testLink = await screen.findByTestId('test-link');
    expect(testLink).toBeTruthy();
  });

  it('should create data-analytics attribute', async () => {
    const analytics = new Analytics();

    render(
      <Link
        testId="test-link"
        ref={ref => analytics.set(ref, 'TestLink')}/>
    );
    const testLink = await screen.findByTestId('test-link');
    expect(testLink.getAttribute('data-analytics')).toBe('test-link');
  });
});
