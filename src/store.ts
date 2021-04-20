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

export type Cell =
  | typeof DIGITS.ZERO
  | typeof DIGITS.ONE
  | typeof DIGITS.TWO
  | typeof DIGITS.THREE
  | typeof DIGITS.FOUR
  | typeof DIGITS.FIVE
  | typeof DIGITS.SIX
  | typeof DIGITS.SEVEN
  | typeof DIGITS.EIGHT
  | typeof DIGITS.NINE;

export type Grid = Cell[][];

export const initialState: Grid = [
  [0, 0, 7, 5, 0, 2, 9, 0, 0],
  [0, 9, 6, 0, 8, 0, 0, 1, 0],
  [8, 0, 4, 0, 0, 0, 6, 2, 7],
  [7, 0, 0, 8, 0, 5, 0, 0, 3],
  [0, 4, 0, 0, 1, 0, 0, 6, 0],
  [9, 0, 0, 6, 0, 7, 0, 0, 1],
  [1, 7, 9, 0, 0, 0, 2, 0, 6],
  [0, 3, 0, 0, 7, 0, 1, 8, 0],
  [0, 0, 2, 3, 0, 1, 5, 0, 0]
];

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
