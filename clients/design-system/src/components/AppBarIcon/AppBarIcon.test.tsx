import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { AppBarIcon } from './AppBarIcon';
import '@testing-library/jest-dom';

describe('AppBarIcon', () => {
  test('renders with correct props', () => {
    const onClick = jest.fn();
    render(
      <AppBarIcon collapsed={true} onClick={onClick} testId="app-bar-icon" />,
    );

    const button = screen.getByTestId('app-bar-icon');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('app-bar-icon');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(
      <AppBarIcon collapsed={true} onClick={onClick} testId="app-bar-icon" />,
    );

    const button = screen.getByTestId('app-bar-icon');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
