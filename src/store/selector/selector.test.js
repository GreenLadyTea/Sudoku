import { FILTER_TYPES } from '../store';
import { selectFilteredList } from './selector';

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
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
});

test('Селектор возвращает стейт только с выполненными целями в листе, если фильтр DONE и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.DONE;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(array[0]);
  expect(result.list[1]).toEqual(array[3]);
});

test('Селектор возвращает стейт только с невыполненными целями в листе, если фильтр NOT_DONE и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.NOT_DONE;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(array[1]);
  expect(result.list[1]).toEqual(array[2]);
});

test('Селектор возвращает стейт со всеми целями в листе, если фильтр ALL и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.ALL;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(result.list[i]).toEqual(array[i]);
  }
});

test('Селектор возвращает стейт с неизменным списком целей, если строка поиска пустая и фильтр ALL', () => {
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(result.list[i]).toEqual(array[i]);
  }
});

test('Селектор возвращает стейт со списком целей, в которых имеется данная подстрока из строки поиска и фильтр ALL', () => {
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(3);
  for (let i = 0; i < 3; i++) {
    expect(result.list[i]).toEqual(array[i + 1]);
  }
});

test('Селектор возвращает стейт со списком выполненных целей, в которых имеется данная подстрока из строки поиска и фильтр DONE', () => {
  state.filtered = FILTER_TYPES.DONE;
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(1);
  expect(result.list[0]).toEqual(array[3]);
});

test('Селектор возвращает стейт со списком невыполненных целей, в которых имеется данная подстрока из строки поиска и фильтр NOT_DONE', () => {
  state.filtered = FILTER_TYPES.NOT_DONE;
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(array[1]);
  expect(result.list[1]).toEqual(array[2]);
});
