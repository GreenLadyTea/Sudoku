import React from 'react';
import { screen } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import { initialState } from '../../store/store';
import ErrorCounter from './ErrorCounter';

test('Счетчик рендерится', () => {
  const testState = {
    ...initialState
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<ErrorCounter />, { store });
  const element = screen.getByTestId('error-counter');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent('Ошибки: 0');
});

test('Счетчик показывает количество ошибок, содержащееся в поле стейта errorCounter', () => {
  const testState = {
    ...initialState,
    errorCounter: 3
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<ErrorCounter />, { store });
  const element = screen.getByTestId('error-counter');
  expect(element).toHaveTextContent('Ошибки: 3');
});
