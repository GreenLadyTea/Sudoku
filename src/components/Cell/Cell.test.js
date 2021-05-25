import React from 'react';
import Cell from './Cell';
import { screen, fireEvent } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import { CELL_STATE_TYPES, initialState } from '../../store/store';
import { selectCell } from '../../store/actions/actions';

const id = 1;

const empty = CELL_STATE_TYPES.EMPTY;
const corrupted = CELL_STATE_TYPES.CORRUPTED;
const selected = CELL_STATE_TYPES.SELECTED;
const selectedEmpty = CELL_STATE_TYPES.SELECTED_EMPTY;
const assigned = CELL_STATE_TYPES.ASSIGNED;
const predetermined = CELL_STATE_TYPES.PREDETERMINED;

const store = makeTestStore({ initialState });

test('Клетка рендерится', () => {
  testRender(<Cell id={id} value={0} state={empty} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent('');
});

test('При нажатии на клетку вызывается store.dispatch с параметром selectCell(id)', () => {
  testRender(<Cell id={id} value={0} state={empty} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(selectCell(id));
});

test('Клетка, в которую записано ошибочное значение, имеет класс corrupted', () => {
  testRender(<Cell id={id} value={3} state={corrupted} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(corrupted);
});

test('Невыделенная пустая клетка имеет класс empty', () => {
  testRender(<Cell id={id} value={0} state={empty} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(empty);
});

test('Выделенная непустая изменяемая клетка имеет класс selected', () => {
  testRender(<Cell id={id} value={3} state={selected} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(selected);
});

test('Выделенная пустая клетка имеет класс selected-empty', () => {
  testRender(<Cell id={id} value={0} state={selectedEmpty} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(selectedEmpty);
});

test('<Более неизменяемая клетка имеет класс assigned', () => {
  testRender(<Cell id={id} value={3} state={assigned} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(assigned);
});

test('<Изначально заданная паззлом клетка имеет класс predetermined', () => {
  testRender(<Cell id={id} value={3} state={predetermined} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(predetermined);
});
