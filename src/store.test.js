import {
  ACTION_TYPES,
  assignDigit,
  selectCell,
  COLUMNS,
  initialState,
  makeGrid,
  reducer,
  ROWS
} from './store';
import puzzles from './puzzles.json';

const rowIndex = 2;
const columnIndex = 3;

test('Создается сетка', () => {
  const grid = makeGrid();
  expect(grid.length).toBe(ROWS);
  expect(grid[0].length).toBe(COLUMNS);
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      expect(grid[rowIndex][columnIndex].value).toEqual(
        puzzles.firstPuzzle.game[rowIndex][columnIndex]
      );
      expect(grid[rowIndex][columnIndex].isChangeable).toEqual(
        grid[rowIndex][columnIndex].value === ''
      );
      expect(grid[rowIndex][columnIndex].isChecked).toBe(false);
    }
  }
});

test('При вызове редьюсера с экшеном selectCell возвращается состояние стора, в котором выбранная клетка меняет состояние isChecked на true', () => {
  const id = 10;
  const choose_cell = {
    type: ACTION_TYPES.SELECT_CELL,
    payload: id
  };
  const result = reducer(initialState, choose_cell);
  expect(result.grid[1][1].isChecked).toBe(true);
});

test('При вызове редьюсера с экшеном assignDigit возвращается состояние стора, в котором выбранная клетка меняет value на значение кнопки', () => {
  const digit = puzzles.firstPuzzle.solution[rowIndex][columnIndex].toString();
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  initialState.grid[rowIndex][columnIndex].isChecked = true;
  const result = reducer(initialState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).toEqual(digit);
});

test('При вызове редьюсера с экшеном assignDigit в сторе не увеличивается errorCounter, если переданное число является верным для данной клетки', () => {
  const digit = puzzles.firstPuzzle.solution[rowIndex][columnIndex].toString();
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  initialState.grid[rowIndex][columnIndex].isChecked = true;
  const result = reducer(initialState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).toEqual(digit);
  expect(result.errorCounter).toEqual(0);
});

test('При вызове редьюсера с экшеном assignDigit в сторе увеличивается errorCounter, если переданное число не является верным для данной клетки', () => {
  const digit = '4';
  const assign_digit = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: digit
  };
  initialState.grid[rowIndex][columnIndex].isChecked = true;
  const result = reducer(initialState, assign_digit);
  expect(result.grid[rowIndex][columnIndex].value).not.toEqual(
    puzzles.firstPuzzle.solution[rowIndex][columnIndex]
  );
  expect(result.errorCounter).toEqual(1);
});

test('Создатель экшна selectCell создает новый экшн типа CHOOSE_CELL и с payload равным тому, что ему было передано в параметре', () => {
  const content = 10;
  const expectedAction = {
    type: ACTION_TYPES.SELECT_CELL,
    payload: content
  };
  expect(selectCell(content)).toEqual(expectedAction);
});

test('Создатель экшна assignDigit создает новый экшн типа ASSIGN_DIGIT и с payload равным тому, что ему было передано в параметре', () => {
  const content = '7';
  const expectedAction = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: content
  };
  expect(assignDigit(content)).toEqual(expectedAction);
});
