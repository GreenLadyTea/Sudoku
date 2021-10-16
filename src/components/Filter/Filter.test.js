import { arrayList, makeTestStore, testRender } from '../../setupTests';
import { FILTER_TYPES } from '../../store/store';
import Filter from './Filter';
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { filter, search } from '../../store/actions/actions';

test('Отображает варианты фильтрации и при выборе варианта фильтрации вызывается store.dispatch с экшном filter', () => {
  const testState = {
    list: arrayList,
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
  const store = makeTestStore({ initialState: testState });
  testRender(<Filter />, { store });
  const options = [FILTER_TYPES.ALL, FILTER_TYPES.DONE, FILTER_TYPES.NOT_DONE];
  for (let i = 0; i < options.length; i++) {
    expect(screen.getByText(options[i])).toBeInTheDocument();
  }
  const element = screen.getByText(FILTER_TYPES.DONE);
  expect(store.dispatch).not.toBeCalled();
  fireEvent.click(element);
  expect(store.dispatch).toBeCalledWith(filter(FILTER_TYPES.DONE));
});

test('Отображает строку поиска, при вводе в которую вызывается store.dispatch с экшном search', () => {
  const testState = {
    list: arrayList,
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
  const store = makeTestStore({ initialState: testState });
  const text = 'Абвгд';

  testRender(<Filter />, { store });
  const searchbar = screen.getByTestId('search-bar');
  expect(searchbar).toBeInTheDocument();
  expect(store.dispatch).not.toBeCalled();
  fireEvent.input(searchbar, { target: { value: text } });
  expect(store.dispatch).toBeCalledWith(search(text));
});
