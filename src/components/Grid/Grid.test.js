import React from 'react';
import { screen, render } from '@testing-library/react';
import Grid from './Grid';
import { COLUMNS, initialState, ROWS } from '../../store';

test('Рендерится компонент', () => {
  render(<Grid matrix={initialState} />);
  const element = screen.getByTestId('grid');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  const elements = screen.getAllByTestId('cell');
  let index = 0;
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      expect(elements[index * ROWS + columnIndex]).toHaveTextContent(
        initialState[rowIndex][columnIndex].value.toString()
      );
    }
    index++;
  }
});
