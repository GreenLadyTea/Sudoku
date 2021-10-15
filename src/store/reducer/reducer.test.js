import { reducer } from './reducer';
import { ACTION_TYPES, FILTER_TYPES, initialState } from '../store';

const testElement = {
  name: '2',
  date: '3'
};

const testElement2 = {
  id: '1',
  name: '2',
  date: '3',
  isCompleted: false
};

test('При экшне add reducer возвращает состояние стора, в котором в list содержится новый элемент, переданный в payload экшна', () => {
  const testState = {
    ...initialState
  };
  const testAction = {
    type: ACTION_TYPES.ADD,
    payload: testElement
  };
  const length = testState.list.length;

  const result = reducer(testState, testAction);
  expect(result.list).toHaveLength(length + 1);
  expect(result.list[0].name).toEqual(testElement.name);
  expect(result.list[0].date).toEqual(testElement.date);
});

test('При экшне remove reducer возвращает состояние стора, в котором в list удаляется элемент, id которого передан в payload экшна', () => {
  const testState = {
    ...initialState,
    list: [...initialState.list, testElement2]
  };
  const length = testState.list.length;
  const testAction = {
    type: ACTION_TYPES.REMOVE,
    payload: testElement2.id
  };

  const result = reducer(testState, testAction);
  expect(result.list).toHaveLength(length - 1);
});

test('При экшне complete reducer возвращает состояние стора, в котором в state.list у элемента, id которого передан в payload экшна, поле isCompleted изменяется на противоположное', () => {
  const testState = {
    ...initialState,
    list: [...initialState.list, testElement2]
  };
  const testAction = {
    type: ACTION_TYPES.COMPLETE,
    payload: testElement2.id
  };
  const result = reducer(testState, testAction);
  expect(result.list[0].isCompleted).toBe(true);
});

test('При экшне filter reducer возвращает состояние стора, в котором state.filtered меняется на то, что передано в payload', () => {
  const testState = {
    ...initialState
  };
  const testAction = {
    type: ACTION_TYPES.FILTER,
    payload: FILTER_TYPES.NOT_DONE
  };
  const result = reducer(testState, testAction);
  expect(result.filtered).toEqual(FILTER_TYPES.NOT_DONE);
});

test('При экшне search reducer возвращает состояние стора, в котором state.searchBar меняется на то, что передано в payload', () => {
  const str = 'Re';
  const testState = {
    ...initialState
  };
  const testAction = {
    type: ACTION_TYPES.SEARCH,
    payload: str
  };
  const result = reducer(testState, testAction);
  expect(result.searchBar).toEqual(str);
});
