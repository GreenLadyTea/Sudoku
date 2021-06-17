import { CellType, COLUMNS, ENDGAME_TYPES, MAXIMUM_AMOUNT_OF_ERRORS, ROWS } from '../store';

export function checkIfSudokuIsSolved(grid: CellType[][]): boolean {
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      if (grid[rowIndex][columnIndex].value === 0) {
        return false;
      }
    }
  }
  return true;
}

export function selector(grid: CellType[][], errorCounter: number): number {
  if (errorCounter > MAXIMUM_AMOUNT_OF_ERRORS - 2) {
    return ENDGAME_TYPES.FAIL;
  } else if (checkIfSudokuIsSolved(grid)) {
    return ENDGAME_TYPES.WIN;
  } else {
    return ENDGAME_TYPES.GAME_IS_NOT_OVER;
  }
}
