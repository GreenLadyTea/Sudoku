import React from 'react';
import { screen, render } from '@testing-library/react';
import Menu from './Menu';

test('Отображается 9 кнопок с цифрами', () => {
  render(<Menu />);
  const elements = screen.getAllByTestId('button');
  expect(elements).toHaveLength(9);
  for (let i = 0; i < 9; i++) {
    expect(elements[i]).toHaveTextContent((i + 1).toString());
  }
});
