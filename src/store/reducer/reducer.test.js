import { ACTION_TYPES, CELL_STATE_TYPES, initialState } from '../store';
import { reducer } from './reducer';
import puzzles from '../../puzzles.json';

test('1 При вызове редьюсера с экшеном selectCell возвращается состояние стора, в котором выбранная клетка меняет состояние isChecked на true', () => {
  const testState = {
    ...initialState
  };
  const id = 10;
  const choose_cell = {
    type: ACTION_TYPES.SELECT_CELL,
    payload: id
  };
  const result = reducer(testState, choose_cell);
  expect(result.grid[1][1].state).toBe(CELL_STATE_TYPES.SELECTED_EMPTY);
});

test('2 При вызове редьюсера с экшеном assignDigit возвращается состояние стора, в котором выбранная клетка меняет value на значение кнопки', () => {
  const testState = {
    ...initialState
  };
  const digit = puzzles.firstPuzzle.solution[2][3];
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  testState.grid[2][3].state = CELL_STATE_TYPES.SELECTED_EMPTY;
  const result = reducer(testState, assign_digit);
  expect(result.grid[2][3].value).toEqual(digit);
});

test('3 При вызове редьюсера с экшеном assignDigit в сторе не увеличивается errorCounter, если переданное число является верным для данной клетки', () => {
  const testState = {
    ...initialState
  };
  const digit = puzzles.firstPuzzle.solution[2][3];
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  testState.grid[2][3].state = CELL_STATE_TYPES.SELECTED_EMPTY;
  const result = reducer(testState, assign_digit);
  expect(result.grid[2][3].value).toEqual(digit);
  expect(result.errorCounter).toEqual(0);
});

test('4 При вызове редьюсера с экшеном assignDigit в сторе увеличивается errorCounter, если переданное число не является верным для данной клетки', () => {
  const testState = {
    ...initialState
  };
  const digit = 4;
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  testState.grid[2][3].state = CELL_STATE_TYPES.SELECTED_EMPTY;
  const result = reducer(testState, assign_digit);
  expect(result.grid[2][3].value).not.toEqual(puzzles.firstPuzzle.solution[2][3]);
  expect(result.errorCounter).toEqual(1);
});
