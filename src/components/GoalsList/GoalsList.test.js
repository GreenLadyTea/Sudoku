import { arrayList, makeTestStore, testRender } from '../../setupTests';
import { screen } from '@testing-library/react';
import React from 'react';
import { FILTER_TYPES, initialState } from '../../store/store';
import GoalsList from './GoalsList';

test('Отображает все элементы списка', () => {
  const testState = {
    list: arrayList,
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<GoalsList />, { store });
  const elements = screen.getAllByTestId('goal-name');
  expect(elements).toHaveLength(4);
});

test('Если список в state пустой, выводит сообщение о том, что надо добавить элементы', () => {
  const testState = {
    ...initialState
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<GoalsList />, { store });
  const element = screen.getByTestId('list');
  expect(element).toHaveTextContent('Целей нет! Срочно поставьте!');
});
