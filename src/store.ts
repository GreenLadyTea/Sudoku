export enum DIGITS {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE
}

export interface CellType {
  id: number;
  value: DIGITS;
  isChangeable: boolean;
  isChecked: boolean;
}

export type Grid = CellType[][];

export function makeGrid(): Grid {
  let matrix: Grid = [];
  let index = 0;
  for (let i = 0; i < 9; i++) {
    matrix[i] = [];
    for (let j = 0; j < 9; j++) {
      matrix[i][j] = {
        id: index++,
        value: DIGITS.ZERO,
        isChangeable: true,
        isChecked: false
      };
    }
  }
  return matrix;
}

export const initialState: Grid = makeGrid();

export enum ACTION_TYPES {
  CHANGE = 'change'
}

export interface ActionChange {
  type: ACTION_TYPES.CHANGE;
  payload: number;
}

export type Action = ActionChange;

export default function reducer(state = initialState, action: Action): Grid {
  switch (action.type) {
    case ACTION_TYPES.CHANGE:
      return state;
    default:
      return state;
  }
}
