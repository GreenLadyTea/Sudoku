import { selectCellMutator } from './selectCellMutator';
import { makeGrid } from '../gridCreator';
import { COLUMNS, ROWS } from '../store';

test('1 Мутатор получает на вход сетку и id возвращает сетку, в которой клетка с данным id имеет isChecked = true, а у всех остальных клеток false', () => {
  const grid = makeGrid('firstPuzzle');
  const id = 3;
  grid[0][5].isChecked = true;
  const newGrid = selectCellMutator(grid, id);
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      if (newGrid[rowIndex][columnIndex].id === id) {
        expect(newGrid[rowIndex][columnIndex].isChecked).toBe(true);
      } else {
        expect(newGrid[rowIndex][columnIndex].isChecked).toBe(false);
      }
    }
  }
});
