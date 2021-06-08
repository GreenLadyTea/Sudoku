import { CELL_STATE_TYPES, COLUMNS, GridType, PUZZLES, ROWS } from '../store';

export function makeGrid(puzzleName = 'firstPuzzle'): GridType {
  let matrix: GridType = [];
  let index = 0;
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      const value = PUZZLES[puzzleName].game[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = {
        id: index++,
        value,
        state: value !== 0 ? CELL_STATE_TYPES.PREDETERMINED : CELL_STATE_TYPES.EMPTY,
        digitsArray: []
      };
    }
  }
  return matrix;
}
