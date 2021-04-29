import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Button from './Button';
import { makeTestStore, testRender } from '../../setupTests';
import { assignDigit, initialState } from '../../store';

const digit = '4';

const store = makeTestStore({ initialState });

test('Кнопка рендерится', () => {
  testRender(<Button digit={digit} />, { store });
  const element = screen.getByTestId('button');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(digit);
});

test('При нажатии на клетку вызывается store.dispatch с параметром id', () => {
  testRender(<Button digit={digit} />, { store });
  const element = screen.getByTestId('button');
  expect(element).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(assignDigit(digit));
});
