import { screen, render } from '@testing-library/react';
import { Analytics } from '../../utils/Analytics';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should create data-test-id attribute', async () => {
    render(
      <Checkbox testId="test-checkbox"/>
    );
    const testCheckbox = await screen.findByTestId('test-checkbox');
    expect(testCheckbox).toBeTruthy();
  });

  it('should create data-analytics attribute', async () => {
    const analytics = new Analytics();

    render(
      <Checkbox
        testId="test-checkbox"
        ref={ref => analytics.set(ref, 'TestCheckbox')}/>
    );
    const testCheckbox = await screen.findByTestId('test-checkbox');
    expect(testCheckbox.getAttribute('data-analytics')).toBe('test-checkbox');
  });
});
