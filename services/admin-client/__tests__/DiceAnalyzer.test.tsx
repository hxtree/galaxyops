import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DiceAnalyzer from '../components/DiceAnalyzer';

test('should render expected fields and buttons', () => {
  render(<DiceAnalyzer />);
  expect(screen.queryByText('Average')).toBeNull();

  fireEvent.click(screen.getByTestId(/dice-analyzer-roll/i));

  expect(screen.getByTestId(/dice-analyzer-clear/i)).toBeTruthy();
  expect(screen.getByTestId(/dice-analyzer-roll/i)).toBeTruthy();
});
