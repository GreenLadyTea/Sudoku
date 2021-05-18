import { GridType, ROWS } from '../store';

export function selectCellMutator(grid: GridType, id: number): GridType {
  const newGrid = [...grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map(cell => {
      if (cell.id === id && !cell.isPredetermined && cell.isChangeable) {
        return { ...cell, isChecked: true };
      } else if (cell.isChecked) {
        return { ...cell, isChecked: false };
      }
      return cell;
    });
  }
  return newGrid;
}
