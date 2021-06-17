import { CELL_STATE_TYPES, CellType, COLUMNS, GridType, ROWS, SudokuType } from '../store';

export function makeGrjd(sudoku: SudokuType): GridType {
  let matrix: CellType[][] = [];
  let index = 0;

  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      const value = sudoku.gameGrid[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = {
        id: index++,
        value,
        state: value !== 0 ? CELL_STATE_TYPES.PREDETERMINED : CELL_STATE_TYPES.EMPTY,
        digitsArray: []
      };
    }
  }

  return {
    game: matrix,
    solution: sudoku.solutionGrid
  };
}
