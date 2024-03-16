import React from 'react';
import { screen, render } from '@testing-library/react';
import { Analytics } from './Analytics';
import { Button } from '../components/Button/Button';

describe('Analytics', () => {
  type TestComponentProps = {
    analyticsScope?: string;
  };

  const TestComponent: React.FC<TestComponentProps> = (props) => {
    const analytics = new Analytics(props.analyticsScope);

    return (
      <>
        <Button testId="submit" ref={ref => analytics.set(ref, 'SubmitButton')}
        >Submit</Button>
        <input data-testid="counter-checkbox" type="checkbox" {...analytics.props('CounterCheckbox')}/>
        <button data-testid="stop-button" {...analytics.props('StopButton')}>
          Stop
        </button>
        <button data-testid="start-button" {...analytics.props('StartButton')}>
          Start
        </button>
      </>
    );
  };

  it('should create data-analytics tag without scope', async () => {
    render(<TestComponent/>);
    const checkbox = await screen.findByTestId('counter-checkbox');
    const stopButton = await screen.findByTestId('stop-button');
    const startButton = await screen.findByTestId('start-button');
    const submitButton = await screen.findByTestId('submit-button');

    expect(checkbox.getAttribute('data-analytics')).toBe('counter-checkbox');
    expect(startButton.getAttribute('data-analytics')).toBe('start-button');
    expect(stopButton.getAttribute('data-analytics')).toBe('stop-button');
    expect(submitButton.getAttribute('data-analytics')).toBe('submit-button');
  });

  it('should create data-analytics tag with scope', async () => {
    render(<TestComponent analyticsScope='test-component'/>);
    const checkbox = await screen.findByTestId('counter-checkbox');
    const stopButton = await screen.findByTestId('stop-button');
    const startButton = await screen.findByTestId('start-button');
    const submitButton = await screen.findByTestId('submit-button');

    expect(checkbox.getAttribute('data-analytics')).toBe('test-component-counter-checkbox');
    expect(startButton.getAttribute('data-analytics')).toBe('test-component-start-button');
    expect(stopButton.getAttribute('data-analytics')).toBe('test-component-stop-button');
    expect(submitButton.getAttribute('data-analytics')).toBe('test-component-submit-button');
  });
});
