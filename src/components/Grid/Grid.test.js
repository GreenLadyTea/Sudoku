import React from 'react';
import { screen, render } from '@testing-library/react';
import Grid from './Grid';
import { initialState } from '../../store';

test('Рендерится компонент', () => {
  render(<Grid matrix={initialState} />);
  const element = screen.getByTestId('grid');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
