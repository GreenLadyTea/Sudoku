import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/store';

const TestProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>;

export function testRender(ui, { store, ...otherOpts }) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts);
}

export function makeTestStore({ initialState, store = createStore(reducer, initialState) } = {}) {
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

export const arrayList = [
  {
    id: '0',
    name: 'Вытереть пыль',
    date: '09-10-2021',
    isCompleted: true
  },
  {
    id: '1',
    name: 'Полить цветы',
    date: '10-10-2021',
    isCompleted: false
  },
  {
    id: '2',
    name: 'Помыть посуду',
    date: '11-10-2021',
    isCompleted: false
  },
  {
    id: '3',
    name: 'Погладить кота',
    date: '12-10-2021',
    isCompleted: true
  }
];
