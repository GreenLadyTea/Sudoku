import { puzzles, ROWS, State } from '../store';

export function assignDigitMutator(state: State, digit: number): State {
  let isError = false;
  const newGrid = [...state.grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map((cell, cellIndex) => {
      if (cell.isChecked && !cell.isPredetermined && cell.isChangeable) {
        if (digit === 0) {
          return {
            ...cell,
            value: digit,
            isError: isError
          };
        } else if (digit === puzzles[state.currentPuzzle].solution[rowIndex][cellIndex]) {
          return {
            ...cell,
            value: digit,
            isChangeable: false,
            isError: isError
          };
        } else {
          isError = true;
          return {
            ...cell,
            value: digit,
            isError: true
          };
        }
      }
      return cell;
    });
  }
  return {
    ...state,
    grid: newGrid,
    errorCounter: isError ? state.errorCounter + 1 : state.errorCounter
  };
}
