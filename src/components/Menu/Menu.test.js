import React from 'react';
import { screen } from '@testing-library/react';
import Menu from './Menu';
import { makeTestStore, testRender } from '../../setupTests';
import { initialState } from '../../store';

const store = makeTestStore({ initialState });

test('Отображается 9 кнопок с цифрами', () => {
  testRender(<Menu />, { store });
  const elements = screen.getAllByTestId('button');
  expect(elements).toHaveLength(9);
  for (let i = 0; i < 9; i++) {
    expect(elements[i]).toHaveTextContent((i + 1).toString());
  }
});
