import json from './puzzles.json';
import { createStore } from 'redux';

export const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

type PUZZLES_TYPE = {
  [key: string]: {
    game: string[][];
    solution: number[][];
  };
};

const puzzles: PUZZLES_TYPE = json;

export const ROWS = 9;
export const COLUMNS = 9;

export interface CellType {
  id: number;
  value: string;
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
        isChangeable: value === '',
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
  payload: string;
}

export type Action = ActionSelectCell | ActionAssignDigit;

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.SELECT_CELL: {
      return { ...state, grid: [...selectCellMutator(state.grid, action.payload)] };
    }
    case ACTION_TYPES.ASSIGN_DIGIT: {
      let isError = false;
      for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
        state.grid[rowIndex] = state.grid[rowIndex].map((cell, cellIndex) => {
          if (cell.isChecked && cell.isChangeable) {
            if (
              action.payload ===
              puzzles[state.currentPuzzle].solution[rowIndex][cellIndex].toString()
            ) {
              return {
                ...cell,
                value: action.payload,
                isError: false
              };
            } else {
              console.log(state.currentPuzzle, rowIndex, cellIndex, puzzles[state.currentPuzzle].solution[rowIndex][cellIndex]);
              isError = true;
              return {
                ...cell,
                value: action.payload,
                isError: true
              };
            }
          }
          return cell;
        });
      }
      console.log(isError);
      return {
        ...state,
        grid: [...state.grid],
        errorCounter: isError ? state.errorCounter + 1 : state.errorCounter
      };
    }
    default:
      return state;
  }
}

export const selectCell = (content: number) => ({
  type: ACTION_TYPES.SELECT_CELL,
  payload: content
});

export const assignDigit = (content: string) => ({
  type: ACTION_TYPES.ASSIGN_DIGIT,
  payload: content
});

export function selectCellMutator(grid: GridType, id: number): GridType {
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    grid[rowIndex] = grid[rowIndex].map(cell => {
      if (cell.id === id) {
        return { ...cell, isChecked: true };
      } else if (cell.isChecked) {
        return { ...cell, isChecked: false };
      }
      return cell;
    });
  }
  return grid;
}

export const store = createStore(reducer);
