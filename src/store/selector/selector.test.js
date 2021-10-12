import { FILTER_TYPES } from '../store';
import { selectFilteredList } from './selector';
import { arrayList } from '../../setupTests';

let state;

beforeEach(() => {
  state = {
    list: arrayList,
    filtered: FILTER_TYPES.ALL,
    searchBar: ''
  };
});

test('Селектор возвращает стейт только с выполненными целями в листе, если фильтр DONE и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.DONE;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(arrayList[0]);
  expect(result.list[1]).toEqual(arrayList[3]);
});

test('Селектор возвращает стейт только с невыполненными целями в листе, если фильтр NOT_DONE и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.NOT_DONE;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(arrayList[1]);
  expect(result.list[1]).toEqual(arrayList[2]);
});

test('Селектор возвращает стейт со всеми целями в листе, если фильтр ALL и строка поиска пустая', () => {
  state.filtered = FILTER_TYPES.ALL;
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(result.list[i]).toEqual(arrayList[i]);
  }
});

test('Селектор возвращает стейт с неизменным списком целей, если строка поиска пустая и фильтр ALL', () => {
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(4);
  for (let i = 0; i < 4; i++) {
    expect(result.list[i]).toEqual(arrayList[i]);
  }
});

test('Селектор возвращает стейт со списком целей, в которых имеется данная подстрока из строки поиска и фильтр ALL', () => {
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(3);
  for (let i = 0; i < 3; i++) {
    expect(result.list[i]).toEqual(arrayList[i + 1]);
  }
});

test('Селектор возвращает стейт со списком выполненных целей, в которых имеется данная подстрока из строки поиска и фильтр DONE', () => {
  state.filtered = FILTER_TYPES.DONE;
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(1);
  expect(result.list[0]).toEqual(arrayList[3]);
});

test('Селектор возвращает стейт со списком невыполненных целей, в которых имеется данная подстрока из строки поиска и фильтр NOT_DONE', () => {
  state.filtered = FILTER_TYPES.NOT_DONE;
  state.searchBar = 'По';
  const result = selectFilteredList(state);
  expect(result.list).toHaveLength(2);
  expect(result.list[0]).toEqual(arrayList[1]);
  expect(result.list[1]).toEqual(arrayList[2]);
});
