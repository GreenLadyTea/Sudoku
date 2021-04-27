import React from 'react';
import { screen } from '@testing-library/react';
import Button from './Button';
import { makeTestStore, testRender } from '../../setupTests';
import { initialState } from '../../store';

const digit = 4;

const store = makeTestStore({ initialState });

test('Рендерится компонент', () => {
  testRender(<Button digit={digit} />, { store });
  const element = screen.getByTestId('button');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent(digit.toString());
});
