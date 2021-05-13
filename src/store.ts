import json from './puzzles.json';
import { createStore } from 'redux';

export const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type PUZZLES_TYPE = {
  [key: string]: {
    game: number[][];
    solution: number[][];
  };
};

const puzzles: PUZZLES_TYPE = json;

export const ROWS = 9;
export const COLUMNS = 9;

export interface CellType {
  id: number;
  value: number;
  isChangeable: boolean;
  isChecked: boolean;
  isError: boolean;
}

export type GridType = CellType[][];

export type State = {
  grid: GridType;
  currentPuzzle: string;
  errorCounter: number;
};

export function makeGrid(puzzleName = 'firstPuzzle'): GridType {
  let matrix: GridType = [];
  let index = 0;
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    matrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      const value = puzzles[puzzleName].game[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = {
        id: index++,
        value,
        isChangeable: value === 0,
        isChecked: false,
        isError: false
      };
    }
  }
  return matrix;
}

export const initialState: State = {
  grid: makeGrid(),
  currentPuzzle: 'firstPuzzle',
  errorCounter: 0
};

export enum ACTION_TYPES {
  SELECT_CELL = 'selectCell',
  ASSIGN_DIGIT = 'assignDigit'
}

export interface ActionSelectCell {
  type: ACTION_TYPES.SELECT_CELL;
  payload: number;
}

export interface ActionAssignDigit {
  type: ACTION_TYPES.ASSIGN_DIGIT;
  payload: number;
}

export type Action = ActionSelectCell | ActionAssignDigit;

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.SELECT_CELL: {
      return { ...state, grid: selectCellMutator(state.grid, action.payload) };
    }
    case ACTION_TYPES.ASSIGN_DIGIT: {
      return assignDigitMutator(state, action.payload);
    }
    default:
      return state;
  }
}

export const selectCell = (content: number) => ({
  type: ACTION_TYPES.SELECT_CELL,
  payload: content
});

export const assignDigit = (content: number) => ({
  type: ACTION_TYPES.ASSIGN_DIGIT,
  payload: content
});

export function selectCellMutator(grid: GridType, id: number): GridType {
  const newGrid = [...grid];
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newGrid[rowIndex] = newGrid[rowIndex].map(cell => {
      if (cell.id === id) {
        return { ...cell, isChecked: true };
      } else if (cell.isChecked) {
        return { ...cell, isChecked: false };
      }
      return cell;
    });
  }
  return newGrid;
}

export function assignDigitMutator(state: State, digit: number): State {
  let isError = false;
  const newState = { ...state };
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    newState.grid[rowIndex] = newState.grid[rowIndex].map((cell, cellIndex) => {
      if (cell.isChecked && cell.isChangeable) {
        if (
          digit ===
          puzzles[newState.currentPuzzle].solution[rowIndex][cellIndex]
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

export const store = createStore(reducer);
