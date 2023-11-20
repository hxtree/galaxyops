import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { DiceAnalyzer } from '../components/DiceAnalyzer';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

describe('DiceAnalyzer', () => {
  it('should render expected fields and buttons', async () => {
    render(<DiceAnalyzer />);
    act(() => {
      fireEvent.click(screen.getByTestId('dice-analyzer-roll'));
    });
    expect(screen.getByTestId('dice-analyzer-clear')).toBeTruthy();
    expect(screen.getByTestId('dice-analyzer-roll')).toBeTruthy();
  });

  it('should render default input props', async () => {
    render(<DiceAnalyzer />);

    expect(screen.getByLabelText('Iterations')).toHaveProperty('value', '100');
    expect(screen.getByLabelText('Luck')).toHaveProperty('value', '0');
    expect(screen.getByLabelText('Dice Notation')).toHaveProperty(
      'value',
      '1d6',
    );
  });

  it('should render input props when exist', async () => {
    render(<DiceAnalyzer iterations={1} notation="1d8" luck={0} />);

    expect(screen.getByLabelText('Iterations')).toHaveProperty('value', '1');
    expect(screen.getByLabelText('Luck')).toHaveProperty('value', '0');
    expect(screen.getByLabelText('Dice Notation')).toHaveProperty(
      'value',
      '1d8',
    );
  });

  // it('should show error on failed data fetch', async () => {
  //   jest.spyOn(axios, 'post').mockImplementation(() => {
  //     return Promise.resolve({
  //       data: {
  //         data: [
  //           {
  //             min: 1,
  //             max: 6,
  //             total: 5,
  //             luck: 1,
  //             bonus: 2,
  //           },
  //         ],
  //       },
  //     });
  //   });

  //   render(<DiceAnalyzer iterations={1} notation="1d6" luck={0} />);

  //   act(() => {
  //     fireEvent.click(screen.getByTestId('dice-analyzer-roll'));
  //   });

  //   sleep(3000);
  //   expect(screen.getByText('Iterations22')).toBe('ss');
  // });

  // TODO add test for alert
  // expect(screen.getByRole('alert')).toEqual('Failed..');
});
