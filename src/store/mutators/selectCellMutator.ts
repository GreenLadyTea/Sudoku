import { CELL_STATE_TYPES, GridType, ROWS } from '../store';

export function selectCellMutator(grid: GridType, id: number): GridType {
  const newGrid = [...grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map(cell => {
      if (cell.id === id && cell.state === CELL_STATE_TYPES.EMPTY) {
        return { ...cell, state: CELL_STATE_TYPES.SELECTED_EMPTY };
      } else if (cell.id === id && cell.state === CELL_STATE_TYPES.CORRUPTED) {
        return { ...cell, state: CELL_STATE_TYPES.SELECTED_CORRUPTED };
      } else if (cell.state === CELL_STATE_TYPES.SELECTED_CORRUPTED) {
        return { ...cell, state: CELL_STATE_TYPES.CORRUPTED };
      } else if (cell.id === id && cell.state === CELL_STATE_TYPES.SELECTED_EMPTY) {
        return { ...cell, state: CELL_STATE_TYPES.EMPTY };
      }
      return cell;
    });
  }
  return newGrid;
}
