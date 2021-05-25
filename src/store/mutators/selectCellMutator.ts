import { CELL_STATE_TYPES, GridType, ROWS } from '../store';

export function selectCellMutator(grid: GridType, id: number): GridType {
  const newGrid = [...grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map(cell => {
      if (
        cell.id === id &&
        (cell.state === CELL_STATE_TYPES.EMPTY || cell.state === CELL_STATE_TYPES.CORRUPTED)
      ) {
        return { ...cell, state: CELL_STATE_TYPES.SELECTED };
      }
      return cell;
    });
  }
  return newGrid;
}
