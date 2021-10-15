import { ACTION_TYPES, FILTER_TYPE } from '../store';

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

export interface ActionFilter {
  type: ACTION_TYPES.FILTER;
  payload: FILTER_TYPE;
}

export interface ActionSearch {
  type: ACTION_TYPES.SEARCH;
  payload: string;
}

export type Action =
  | ActionAddGoal
  | ActionDeleteGoal
  | ActionCompleteGoal
  | ActionFilter
  | ActionSearch;

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

export const filter = (content: FILTER_TYPE) => ({
  type: ACTION_TYPES.FILTER,
  payload: content
});

export const search = (content: string) => ({
  type: ACTION_TYPES.SEARCH,
  payload: content
});
