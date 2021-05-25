import React from 'react';
import { screen } from '@testing-library/react';
import Puzzle from './Puzzle';
import { makeTestStore, testRender } from '../../setupTests';
import { COLUMNS, initialState, ROWS } from '../../store/store';

const store = makeTestStore({ initialState });

test('Отображается пазл на начало игры', () => {
  let values = '';
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      if (initialState.grid[rowIndex][columnIndex].value !== 0) {
        values += initialState.grid[rowIndex][columnIndex].value.toString();
      }
    }
  }
  values += '123456789XОшибки: 0';
  testRender(<Puzzle />, { store });
  const element = screen.getAllByTestId('puzzle');
  expect(element[0]).toHaveTextContent(values);
});
