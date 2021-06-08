import json from '../puzzles.json';
import { createStore } from 'redux';
import { reducer } from './reducer/reducer';
import { makeGrid } from './gridCreator/gridCreator';

type PUZZLES_TYPE = {
  [key: string]: {
    game: number[][];
    solution: number[][];
  };
};

export const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const CELL_DIGITS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

export const MAXIMUM_AMOUNT_OF_ERRORS = 5;

export const PUZZLES: PUZZLES_TYPE = json;

export const ROWS = 9;
export const COLUMNS = 9;

export enum CELL_STATE_TYPES {
  PREDETERMINED = 'predetermined',
  EMPTY = 'empty',
  SELECTED_EMPTY = 'selected-empty',
  CORRUPTED = 'corrupted',
  SELECTED_CORRUPTED = 'selected-corrupted',
  ASSIGNED = 'assigned'
}

export interface CellType {
  id: number;
  value: number;
  state: CELL_STATE_TYPES;
}

export type GridType = CellType[][];

export enum ENDGAME_TYPES {
  FAIL,
  WIN,
  GAME_IS_NOT_OVER
}

export enum MODE_TYPES {
  PENCIL = 'карандашик',
  PEN = 'ручка'
}

export type State = {
  grid: GridType;
  currentPuzzle: string;
  errorCounter: number;
  gameIsOver: ENDGAME_TYPES;
  mode: MODE_TYPES;
};

const initialState: State = {
  grid: makeGrid(),
  currentPuzzle: 'firstPuzzle',
  errorCounter: 0,
  gameIsOver: ENDGAME_TYPES.GAME_IS_NOT_OVER,
  mode: MODE_TYPES.PEN
};

export enum ACTION_TYPES {
  SELECT_CELL = 'selectCell',
  ASSIGN_DIGIT = 'assignDigit',
  CHANGE_MODE = 'changeMode'
}

const store = createStore(reducer);
export { reducer, initialState };
export default store;
