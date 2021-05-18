import { ACTION_TYPES, initialState } from '../store';
import { reducer } from './reducer';
import puzzles from '../../puzzles.json';

const rowIndex = 2;
const columnIndex = 3;

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
  console.log(testState.grid[1] === result.grid[1]);
  expect(result.grid[1][1].isChecked).toBe(true);
});

test('2 При вызове редьюсера с экшеном assignDigit возвращается состояние стора, в котором выбранная клетка меняет value на значение кнопки', () => {
  const testState = {
    ...initialState
  };
  const digit = puzzles.firstPuzzle.solution[rowIndex][columnIndex];
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  testState.grid[rowIndex][columnIndex].isChecked = true;
  const result = reducer(testState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).toEqual(digit);
});

test('3 При вызове редьюсера с экшеном assignDigit в сторе не увеличивается errorCounter, если переданное число является верным для данной клетки', () => {
  const testState = {
    ...initialState
  };
  const digit = puzzles.firstPuzzle.solution[rowIndex][columnIndex];
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  testState.grid[rowIndex][columnIndex].isChecked = true;
  for (let row of testState.grid) {
    for (let cell of row) {
      if (cell.isChecked && cell.isChangeable) {
        console.log(cell);
      }
    }
  }
  const result = reducer(testState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).toEqual(digit);
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
  testState.grid[rowIndex][columnIndex].isChecked = true;
  const result = reducer(testState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).not.toEqual(
    puzzles.firstPuzzle.solution[rowIndex][columnIndex]
  );
  expect(result.errorCounter).toEqual(1);
});
