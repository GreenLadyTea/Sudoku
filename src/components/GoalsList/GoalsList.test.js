import { arrayList, makeTestStore, testRender } from '../../setupTests';
import { screen } from '@testing-library/react';
import React from 'react';
import { FILTER_TYPES } from '../../store/store';
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
