import { ACTION_TYPES, MODE_TYPES } from '../store';

export interface ActionSelectCell {
  type: ACTION_TYPES.SELECT_CELL;
  payload: number;
}

export interface ActionAssignDigit {
  type: ACTION_TYPES.ASSIGN_DIGIT;
  payload: number;
}

export interface ActionChangeMode {
  type: ACTION_TYPES.CHANGE_MODE;
  payload: MODE_TYPES;
}

export type Action = ActionSelectCell | ActionAssignDigit | ActionChangeMode;

export const selectCell = (content: number) => ({
  type: ACTION_TYPES.SELECT_CELL,
  payload: content
});

export const assignDigit = (content: number) => ({
  type: ACTION_TYPES.ASSIGN_DIGIT,
  payload: content
});

export const changeMode = (content: MODE_TYPES) => ({
  type: ACTION_TYPES.CHANGE_MODE,
  payload: content
});
