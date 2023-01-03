import React from 'react';
import { createRoot } from 'react-dom/client';
import { Default as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const container = document.createElement('app');
    const root = createRoot(container!);
    root.render(<Button />);
  });
});
