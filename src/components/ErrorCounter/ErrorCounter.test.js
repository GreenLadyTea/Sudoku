import React from 'react';
import { screen } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import { initialState } from '../../store';
import ErrorCounter from './ErrorCounter';

test('Счетчик рендерится', () => {
  const testState = {
    ...initialState
  };
  const store = makeTestStore({ testState });
  testRender(<ErrorCounter />, { store });
  const element = screen.getByTestId('error-counter');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent('Ошибки: 0');
});
