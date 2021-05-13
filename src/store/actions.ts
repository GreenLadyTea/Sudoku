import { ACTION_TYPES } from './store';

export interface ActionSelectCell {
  type: ACTION_TYPES.SELECT_CELL;
  payload: number;
}

export interface ActionAssignDigit {
  type: ACTION_TYPES.ASSIGN_DIGIT;
  payload: number;
}

export type Action = ActionSelectCell | ActionAssignDigit;

export const selectCell = (content: number) => ({
  type: ACTION_TYPES.SELECT_CELL,
  payload: content
});

export const assignDigit = (content: number) => ({
  type: ACTION_TYPES.ASSIGN_DIGIT,
  payload: content
});
