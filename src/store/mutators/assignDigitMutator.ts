import { puzzles, ROWS, State } from '../store';

export function assignDigitMutator(state: State, digit: number): State {
  let isError = false;
  const newState = { ...state };
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newState.grid[rowIndex] = newState.grid[rowIndex].map((cell, cellIndex) => {
      if (cell.isChecked && cell.isChangeable) {
        if (
          digit === puzzles[newState.currentPuzzle].solution[rowIndex][cellIndex] ||
          digit === 0
        ) {
          return {
            ...cell,
            value: digit,
            isError: false
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
    ...newState,
    errorCounter: isError ? state.errorCounter + 1 : state.errorCounter
  };
}
