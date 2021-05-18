import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Menu from './Menu';
import { makeTestStore, testRender } from '../../setupTests';
import { assignDigit } from '../../store/actions/actions';
import { initialState } from '../../store/store';

const store = makeTestStore({ initialState });

test('Отображается 9 кнопок с цифрами', () => {
  testRender(<Menu />, { store });
  const elements = screen.getAllByTestId('button');
  expect(elements).toHaveLength(9);
  for (let i = 0; i < 9; i++) {
    expect(elements[i]).toHaveTextContent((i + 1).toString());
  }
});

test('Отображается кнопка очистки и при нажатии на кнопку вызывается index.dispatch с пустой строкой', () => {
  testRender(<Menu />, { store });
  const element = screen.getByTestId('clear-button');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('X');
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(assignDigit(0));
});
