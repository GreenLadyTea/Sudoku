import { ACTION_TYPES, FILTER_TYPES } from '../store';
import { add, remove, complete, filter, search } from './actions';

test('1 Создатель экшна add создает новый экшн типа ADD и с payload равным тому, что ему было передано в параметре', () => {
  const content = {
    id: '1',
    name: 'y',
    date: '01/01/2020',
    isCompleted: false
  };
  const expectedAction = {
    type: ACTION_TYPES.ADD,
    payload: content
  };
  expect(add(content)).toEqual(expectedAction);
});

test('2 Создатель экшна remove создает новый экшн типа REMOVE и с payload, равным тому, что ему было передано в параметре', () => {
  const content = '1';
  const expectedAction = {
    type: ACTION_TYPES.REMOVE,
    payload: content
  };
  expect(remove(content)).toEqual(expectedAction);
});

test('3 Создатель экшна complete создает новый экшн типа COMPLETE и с payload, равным тому, что ему было передано в параметре', () => {
  const content = '2';
  const expectedAction = {
    type: ACTION_TYPES.COMPLETE,
    payload: content
  };
  expect(complete(content)).toEqual(expectedAction);
});

test('4 Создатель экшна filter создает новый экшн типа FILTER и с payload, равным тому, что ему было передано в параметре', () => {
  const content = FILTER_TYPES.NOT_DONE;
  const expectedAction = {
    type: ACTION_TYPES.FILTER,
    payload: content
  };
  expect(filter(content)).toEqual(expectedAction);
});

test('5 Создатель экшна search создает новый экшн типа SEARCH и с payload, равным тому, что ему было передано в параметре', () => {
  const content = 'А';
  const expectedAction = {
    type: ACTION_TYPES.SEARCH,
    payload: content
  };
  expect(search(content)).toEqual(expectedAction);
});
