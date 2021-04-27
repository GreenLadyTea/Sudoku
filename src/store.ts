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

export const initialState: GridType = makeGrid('secondPuzzle');

export enum ACTION_TYPES {
  CHOOSE_CELL = 'chooseCell',
  ASSIGN_DIGIT = 'assignDigit'
}

export interface ActionChooseCell {
  type: ACTION_TYPES.CHOOSE_CELL;
  payload: number;
}

export interface ActionAssignDigit {
  type: ACTION_TYPES.ASSIGN_DIGIT;
  payload: number;
}

export type Action = ActionChooseCell | ActionAssignDigit;

export function reducer(state = initialState, action: Action): GridType {
  switch (action.type) {
    case ACTION_TYPES.CHOOSE_CELL: {
      for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
        state[rowIndex] = state[rowIndex].map(cell => {
          if (cell.id === action.payload) {
            return { ...cell, isChecked: true };
          } else if (cell.isChecked) {
            return { ...cell, isChecked: false };
          }
          return cell;
        });
      }
      return [...state];
    }
    case ACTION_TYPES.ASSIGN_DIGIT: {
      for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
        state[rowIndex] = state[rowIndex].map(cell => {
          if (cell.isChecked && cell.isChangeable) {
            return {
              ...cell,
              value: action.payload
            };
          }
          return cell;
        });
      }
      return [...state];
    }
    default:
      return state;
  }
}

export const chooseCell = (content: number) => ({
  type: ACTION_TYPES.CHOOSE_CELL,
  payload: content
});

export const assignDigit = (content: number) => ({
  type: ACTION_TYPES.ASSIGN_DIGIT,
  payload: content
});

export const store = createStore(reducer);
