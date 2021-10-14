import { ACTION_TYPES } from '../store';

export type NameDate = {
  name: string;
  date: string;
};

export interface ActionAddGoal {
  type: ACTION_TYPES.ADD;
  payload: NameDate;
}

export interface ActionDeleteGoal {
  type: ACTION_TYPES.REMOVE;
  payload: string;
}

export interface ActionCompleteGoal {
  type: ACTION_TYPES.COMPLETE;
  payload: string;
}

export type Action = ActionAddGoal | ActionDeleteGoal | ActionCompleteGoal;

export const add = (content: NameDate) => ({
  type: ACTION_TYPES.ADD,
  payload: content
});

export const remove = (content: string) => ({
  type: ACTION_TYPES.REMOVE,
  payload: content
});

export const complete = (content: string) => ({
  type: ACTION_TYPES.COMPLETE,
  payload: content
});
