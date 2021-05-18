import { PUZZLES, ROWS, State } from '../store';
import { selector } from '../selector';

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
            isError: false
          };
        } else if (digit === PUZZLES[state.currentPuzzle].solution[rowIndex][cellIndex]) {
          return {
            ...cell,
            value: digit,
            isChangeable: false,
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
    ...state,
    grid: newGrid,
    errorCounter: isError ? state.errorCounter + 1 : state.errorCounter,
    gameIsOver: selector(newGrid, state.errorCounter)
  };
}
