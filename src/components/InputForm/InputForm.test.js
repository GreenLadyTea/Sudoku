import React from 'react';
import { arrayList, makeTestStore, testRender } from '../../setupTests';
import { FILTER_TYPES } from '../../store/store';
import InputForm from './InputForm';
import { fireEvent, screen } from '@testing-library/react';
import { add } from '../../store/actions/actions';

test('Форма отображается и при вводе данных в поля и нажатии кнопки отправить вызывается store.dispatch', () => {
  const testState = {
    list: arrayList,
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
  const dateValue = '2021-11-11T08:30';
  const textValue = 'Завоевать Карфаген';
  const store = makeTestStore({ initialState: testState });

  testRender(<InputForm />, { store });
  const dateField = screen.getByTestId('date');
  const textField = screen.getByTestId('text');
  const button = screen.getByTestId('button');

  expect(store.dispatch).not.toBeCalled();
  fireEvent.input(dateField, { target: { value: dateValue } });
  fireEvent.input(textField, { target: { value: textValue } });
  fireEvent.click(button);
  expect(store.dispatch).toBeCalledWith(add({ name: textValue, date: dateValue }));
});
