import { CELL_STATE_TYPES, MODE_TYPES, PUZZLES, ROWS, State } from '../store';
import { selector } from '../selector/selector';

export function assignDigitMutator(state: State, digit: number): State {
  let isError = false;
  const newGrid = [...state.grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map((cell, cellIndex) => {
      if (
        cell.state === CELL_STATE_TYPES.SELECTED_EMPTY ||
        cell.state === CELL_STATE_TYPES.SELECTED_CORRUPTED
      ) {
        if (state.mode === MODE_TYPES.PEN) {
          if (digit === 0) {
            return {
              ...cell,
              value: digit,
              state: CELL_STATE_TYPES.SELECTED_EMPTY
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
              state: CELL_STATE_TYPES.SELECTED_CORRUPTED
            };
          }
        }
        if (state.mode === MODE_TYPES.PENCIL) {
          if (cell.digitsArray.includes(digit)) {
            return {
              ...cell,
              digitsArray: [...cell.digitsArray].filter(item => item !== digit)
            };
          }
          return {
            ...cell,
            digitsArray: [...cell.digitsArray, digit]
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
