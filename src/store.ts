import json from './puzzles.json';
import { createStore } from 'redux';

export const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type PUZZLES_TYPE = {
  [key: string]: {
    game: number[][];
    solution: number[][];
  };
};

export const ROWS = 9;
export const COLUMNS = 9;

export interface CellType {
  id: number;
  value: number;
  isChangeable: boolean;
  isChecked: boolean;
}

export type GridType = CellType[][];

const puzzles: PUZZLES_TYPE = json;

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
        isChecked: false
      };
    }
  }
  return matrix;
}

export const initialState: GridType = makeGrid();

export enum ACTION_TYPES {
  CHOOSE_CELL = 'chooseCell'
}

export interface ActionChooseCell {
  type: ACTION_TYPES.CHOOSE_CELL;
  payload: number;
}

export type Action = ActionChooseCell;

export function reducer(state = initialState, action: Action): GridType {
  switch (action.type) {
    case ACTION_TYPES.CHOOSE_CELL: {
      for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
        for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
          if (state[rowIndex][columnIndex].id === action.payload) {
            state[rowIndex][columnIndex].isChecked = !state[rowIndex][columnIndex].isChecked;
            console.log(state[rowIndex][columnIndex]);
            console.log(rowIndex, columnIndex);
          } else {
            state[rowIndex][columnIndex].isChecked = false;
          }
        }
      }
      return { ...state };
    }
    default:
      return state;
  }
}

export const chooseCell = (id: number) => ({
  type: ACTION_TYPES.CHOOSE_CELL,
  payload: id
});

export const store = createStore(reducer);
