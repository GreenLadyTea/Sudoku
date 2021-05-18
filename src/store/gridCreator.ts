import { COLUMNS, GridType, PUZZLES, ROWS } from './store';

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
        isPredetermined: value !== 0,
        isChangeable: value === 0,
        isChecked: false,
        isError: false
      };
    }
  }
  return matrix;
}
