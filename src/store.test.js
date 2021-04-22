import { COLUMNS, makeGrid, ROWS } from './store';
import puzzles from './puzzles.json';

test('Создается сетка', () => {
  const grid = makeGrid();
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      expect(grid[rowIndex][columnIndex].value).toEqual(
        puzzles.firstPuzzle.game[rowIndex][columnIndex]
      );
      expect(grid[rowIndex][columnIndex].isChangeable).toEqual(grid[rowIndex][columnIndex].value === 0);
      expect(grid[rowIndex][columnIndex].isChecked).toBe(false);
    }
  }
});
