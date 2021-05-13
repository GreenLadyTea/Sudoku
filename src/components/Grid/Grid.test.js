import React from 'react';
import { screen } from '@testing-library/react';
import Grid from './Grid';
import { COLUMNS, initialState, ROWS } from '../../store';
import { makeTestStore, testRender } from '../../setupTests';

const store = makeTestStore({ initialState });

test('Сетка рендерится', () => {
  testRender(<Grid matrix={initialState} />, { store });
  const element = screen.getByTestId('grid');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  const elements = screen.getAllByTestId('cell');
  let index = 0;
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      if (initialState.grid[rowIndex][columnIndex].value === 0) {
        expect(elements[index * ROWS + columnIndex]).toHaveTextContent('');
      } else {
        expect(elements[index * ROWS + columnIndex]).toHaveTextContent(
          initialState.grid[rowIndex][columnIndex].value.toString()
        );
      }
    }
    index++;
  }
});
