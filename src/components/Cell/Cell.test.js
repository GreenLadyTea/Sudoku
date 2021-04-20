import React from 'react';
import Cell from './Cell';
import { screen, render } from '@testing-library/react';

const id = 0;
const value = 1;
const isChangeable = false;
const isChecked = false;

test('Рендерится компонент', () => {
  render(<Cell id={id} value={value} isChangeable={isChangeable} isChecked={isChecked} />);
  const element = screen.getByTestId('cell');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(value.toString());
});