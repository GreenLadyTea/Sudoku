import { render, screen } from '@testing-library/react';
import Cell from './Cell';
import React from 'react';

const value = 3;

test('Клетка рендерится и отображает переданную цифру', () => {
  render(<Cell value={value} />);
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(value.toString());
});
