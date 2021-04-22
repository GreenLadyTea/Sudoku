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

export type GridType = CellType[][];

export function makeGrid(): GridType {
  let matrix: GridType = [];
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

export const initialState: GridType = makeGrid();

export enum ACTION_TYPES {
  CHANGE = 'change'
}

export interface ActionChange {
  type: ACTION_TYPES.CHANGE;
  payload: number;
}

export type Action = ActionChange;

export default function reducer(state = initialState, action: Action): GridType {
  switch (action.type) {
    case ACTION_TYPES.CHANGE:
      return state;
    default:
      return state;
  }
}
