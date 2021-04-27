import React from 'react';
import Cell from './Cell';
import { screen, fireEvent } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import { chooseCell, initialState } from '../../store';

const id = 1;
const value = 0;
const isChangeable = true;
const isChecked = false;

const store = makeTestStore({ initialState });

test('Клетка рендерится', () => {
  testRender(<Cell id={id} value={0} isChangeable={isChangeable} isChecked={isChecked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(value.toString());
});

test('При нажатии на клетку вызывается store.dispatch с параметром id', () => {
  testRender(<Cell id={id} value={0} isChangeable={isChangeable} isChecked={isChecked} />, { store });
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(chooseCell(id));
});
