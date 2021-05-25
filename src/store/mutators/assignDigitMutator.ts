import { CELL_STATE_TYPES, PUZZLES, ROWS, State } from '../store';
import { selector } from '../selector/selector';

export function assignDigitMutator(state: State, digit: number): State {
  let isError = false;
  const newGrid = [...state.grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map((cell, cellIndex) => {
      if (cell.state === CELL_STATE_TYPES.SELECTED) {
        if (digit === 0) {
          return {
            ...cell,
            value: digit,
            state: CELL_STATE_TYPES.EMPTY
          };
        } else if (digit === PUZZLES[state.currentPuzzle].solution[rowIndex][cellIndex]) {
          return {
            ...cell,
            value: digit,
            state: CELL_STATE_TYPES.ASSIGNED
          };
        } else {
          isError = true;
          return {
            ...cell,
            value: digit,
            state: CELL_STATE_TYPES.CORRUPTED
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
