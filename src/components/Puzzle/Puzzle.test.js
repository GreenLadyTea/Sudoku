import React from 'react';
import { screen } from '@testing-library/react';
import Puzzle from './Puzzle';
import { makeTestStore, testRender } from '../../setupTests';
import { COLUMNS, ENDGAME_TYPES, initialState, ROWS } from '../../store/store';
import { makeGrid } from '../../store/gridCreator/gridCreator';

test('Отображается пазл', () => {
  const store = makeTestStore({ initialState });

  testRender(<Puzzle />, { store });
  const grid = screen.getByTestId('grid');
  const counter = screen.getByTestId('error-counter');
  const buttons = screen.getAllByTestId('button');
  const clearer = screen.getByTestId('clear-button');

  expect(grid).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  expect(clearer).toBeInTheDocument();
  expect(buttons).toHaveLength(9);
});

test('Отображается пазл на начало игры', () => {
  const store = makeTestStore({ initialState });
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
  const element = screen.getByTestId('puzzle');
  expect(element).toHaveTextContent(values);
});

test('Если игра имеет статус WIN, то отображается надпись ПОБЕДА', () => {
  const testState = {
    grid: makeGrid('testFullPuzzle'),
    currentPuzzle: 'testFullPuzzle',
    errorCounter: 0,
    gameIsOver: ENDGAME_TYPES.WIN
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<Puzzle />, { store });
  const element = screen.getByTestId('puzzle');
  expect(element).toHaveTextContent('ПОБЕДА!');
});

test('Если игра имеет статус FAIL, то отображается надпись ПОРАЖЕНИЕ', () => {
  const testState = {
    grid: makeGrid('secondPuzzle'),
    currentPuzzle: 'secondPuzzle',
    errorCounter: 5,
    gameIsOver: ENDGAME_TYPES.FAIL
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<Puzzle />, { store });
  const element = screen.getByTestId('puzzle');
  expect(element).toHaveTextContent('ПОРАЖЕНИЕ! Вы допустили 5 ошибок!');
});
