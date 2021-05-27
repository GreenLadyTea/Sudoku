import { makeTestStore, testRender } from '../../setupTests';
import { initialState, MODE_TYPES } from '../../store/store';
import React from 'react';
import ModeSwitcher, { switchMode } from './ModeSwitcher';
import { fireEvent, screen } from '@testing-library/react';
import { changeMode } from '../../store/actions/actions';

const pen = MODE_TYPES.PEN;
const pencil = MODE_TYPES.PENCIL;

test('Отображается переключатель', () => {
  const store = makeTestStore({ initialState });
  testRender(<ModeSwitcher />, { store });
  const element = screen.getByTestId('switcher');
  expect(element).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(changeMode(pencil));
});

test('Отображается переключатель', () => {
  const store = makeTestStore({ initialState });
  testRender(<ModeSwitcher />, { store });
  const element = screen.getByTestId('switcher');
  expect(element).toBeInTheDocument();
});

test('SwitchMode возвращает pencil, если currentMode = pen', () => {
  const result = switchMode(pen);
  expect(result).toEqual(pencil);
});

test('SwitchMode возвращает pen, если currentMode = pencil', () => {
  const result = switchMode(pencil);
  expect(result).toEqual(pen);
});
