import { ACTION_TYPES, COLUMNS, initialState, makeGrid, reducer, ROWS } from './store';
import puzzles from './puzzles.json';

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
        grid[rowIndex][columnIndex].value === 0
      );
      expect(grid[rowIndex][columnIndex].isChecked).toBe(false);
    }
  }
});

test('При вызове редьюсера с экшеном chooseCell возвращается состояние стора, в котором выбранная клетка меняет состояние isChecked на true', () => {
  const id = 10;
  const choose_cell = {
    type: ACTION_TYPES.CHOOSE_CELL,
    payload: id
  };
  const result = reducer(initialState, choose_cell);
  expect(result[1][1].isChecked).toBe(true);
});
