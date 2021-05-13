import json from '../puzzles.json';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { makeGrid } from './gridCreator';

export const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type PUZZLES_TYPE = {
  [key: string]: {
    game: number[][];
    solution: number[][];
  };
};

export const puzzles: PUZZLES_TYPE = json;

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

const initialState: State = {
  grid: makeGrid(),
  currentPuzzle: 'firstPuzzle',
  errorCounter: 0
};

export enum ACTION_TYPES {
  SELECT_CELL = 'selectCell',
  ASSIGN_DIGIT = 'assignDigit'
}

const store = createStore(reducer);
export { reducer, initialState };
export default store;
