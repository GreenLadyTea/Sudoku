import { FILTER_TYPES } from '../store';
import { selectByFilter } from './selector';

let state;

const array = [
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

beforeEach(() => {
  state = {
    list: array,
    filtered: FILTER_TYPES.ALL
  };
});

test('Селектор возвращает стейт только с выполненными целями в листе, если фильтр DONE', () => {
  state.filtered = FILTER_TYPES.DONE;
  const result = selectByFilter(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(array[0]);
  expect(result.list[1]).toEqual(array[3]);
});

test('Селектор возвращает стейт только с невыполненными целями в листе, если фильтр NOT_DONE', () => {
  state.filtered = FILTER_TYPES.NOT_DONE;
  const result = selectByFilter(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(array[1]);
  expect(result.list[1]).toEqual(array[2]);
});

test('Селектор возвращает стейт со всеми целями в листе, если фильтр ALL', () => {
  state.filtered = FILTER_TYPES.ALL;
  const result = selectByFilter(state);
  expect(result.list).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(result.list[i]).toEqual(array[i]);
  }
});
