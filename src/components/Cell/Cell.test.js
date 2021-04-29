import React from 'react';
import Cell, { cellStyles, stylizeCell } from './Cell';
import { screen, fireEvent } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import { selectCell, initialState } from '../../store';

const id = 1;
const zero = 0;
const notZero = 3;
const changeable = true;
const notChangeable = false;
const checked = true;
const notChecked = false;

const store = makeTestStore({ initialState });

test('Клетка рендерится', () => {
  testRender(<Cell id={id} value={zero} isChangeable={changeable} isChecked={notChecked} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(zero.toString());
});

test('При нажатии на клетку вызывается store.dispatch с параметром id', () => {
  testRender(<Cell id={id} value={zero} isChangeable={changeable} isChecked={notChecked} />, {
    store
  });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(selectCell(id));
});

test('Невыделенная клетка со значением 0 имеет класс empty-cell', () => {
  testRender(<Cell id={id} value={zero} isChangeable={changeable} isChecked={notChecked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(cellStyles.EMPTY);
});

test('Выделенная непустая изменяемая клетка имеет класс selected-cell', () => {
  testRender(<Cell id={id} value={notZero} isChangeable={changeable} isChecked={checked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(cellStyles.SELECTED);
});

test('Выделенная клетка со значением 0 имеет класс selected-empty-cell', () => {
  testRender(<Cell id={id} value={zero} isChangeable={changeable} isChecked={checked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(cellStyles.SELECTED_EMPTY);
});

test('Изменяемая невыделенная непустая клетка имеет класс changeable-cell', () => {
  testRender(<Cell id={id} value={notZero} isChangeable={changeable} isChecked={notChecked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(cellStyles.CHANGEABLE);
});

test('Неизменяемая клетка имеет класс unchangeable-cell', () => {
  testRender(<Cell id={id} value={notZero} isChangeable={notChangeable} isChecked={notChecked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toHaveClass(cellStyles.UNCHANGEABLE);
});

test('Если клетка не выделена и со значением 0, то функция stylizeCell возвращает класс empty', () => {
  const cell = {
    id: id,
    value: zero,
    isChangeable: changeable,
    isChecked: notChecked,
  }
  const result = stylizeCell(cell);
  expect(result).toEqual(cellStyles.EMPTY);
});

test('Если клетка не выделена, изменяемая и не нулевая, то функция stylizeCell возвращает класс changeable', () => {
  const cell = {
    id: id,
    value: notZero,
    isChangeable: changeable,
    isChecked: notChecked,
  }
  const result = stylizeCell(cell);
  expect(result).toEqual(cellStyles.CHANGEABLE);
});

test('Если клетка не выделена и неизменяемая, то функция stylizeCell возвращает класс unchangeable', () => {
  const cell = {
    id: id,
    value: notZero,
    isChangeable: notChangeable,
    isChecked: notChecked,
  }
  const result = stylizeCell(cell);
  expect(result).toEqual(cellStyles.UNCHANGEABLE);
});

test('Если клетка выделена и со значением 0, то функция stylizeCell возвращает класс selected-empty', () => {
  const cell = {
    id: id,
    value: zero,
    isChangeable: changeable,
    isChecked: checked,
  }
  const result = stylizeCell(cell);
  expect(result).toEqual(cellStyles.SELECTED_EMPTY);
});

test('Если клетка выделена и не нулевая, то функция stylizeCell возвращает класс selected', () => {
  const cell = {
    id: id,
    value: notZero,
    isChangeable: changeable,
    isChecked: checked,
  }
  const result = stylizeCell(cell);
  expect(result).toEqual(cellStyles.SELECTED);
});
