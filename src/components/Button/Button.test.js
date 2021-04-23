import React from 'react';
import { screen, render } from '@testing-library/react';
import Button from './Button';

const digit = 4;

test('Рендерится компонент', () => {
  render(<Button digit={4} />);
  const element = screen.getByTestId('button');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(digit.toString());
});
