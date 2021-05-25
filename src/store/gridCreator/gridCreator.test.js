import { CELL_STATE_TYPES, COLUMNS, ROWS } from '../store';
import puzzles from '../../puzzles.json';
import { makeGrid } from './gridCreator';

test('1 Создается сетка', () => {
  const grid = makeGrid();
  expect(grid.length).toBe(ROWS);
  expect(grid[0].length).toBe(COLUMNS);
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      expect(grid[rowIndex][columnIndex].value).toEqual(
        puzzles.firstPuzzle.game[rowIndex][columnIndex]
      );
      expect(grid[rowIndex][columnIndex].state).toEqual(
        grid[rowIndex][columnIndex].value !== 0
          ? CELL_STATE_TYPES.PREDETERMINED
          : CELL_STATE_TYPES.EMPTY
      );
    }
  }
});
