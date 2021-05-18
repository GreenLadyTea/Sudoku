import json from '../puzzles.json';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { makeGrid } from './gridCreator';

type PUZZLES_TYPE = {
  [key: string]: {
    game: number[][];
    solution: number[][];
  };
};

export const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MAXIMUM_AMOUNT_OF_ERRORS = 5;

export const PUZZLES: PUZZLES_TYPE = json;

export const ROWS = 9;
export const COLUMNS = 9;

export interface CellType {
  id: number;
  value: number;
  isPredetermined: boolean;
  isChangeable: boolean;
  isChecked: boolean;
  isError: boolean;
}

export enum ENDGAME_TYPES {
  FAIL,
  WIN,
  GAME_IS_NOT_OVER
}

export type GridType = CellType[][];

export type State = {
  grid: GridType;
  currentPuzzle: string;
  errorCounter: number;
  gameIsOver: number;
};

const initialState: State = {
  grid: makeGrid(),
  currentPuzzle: 'firstPuzzle',
  errorCounter: 0,
  gameIsOver: ENDGAME_TYPES.GAME_IS_NOT_OVER
};

export enum ACTION_TYPES {
  SELECT_CELL = 'selectCell',
  ASSIGN_DIGIT = 'assignDigit'
}

const store = createStore(reducer);
export { reducer, initialState };
export default store;
