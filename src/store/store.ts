import { createStore } from 'redux';
import { reducer } from './reducer/reducer';

export type GoalType = {
  id: string;
  name: string;
  date: string;
  isCompleted: boolean;
};

export enum FILTER_TYPES {
  ALL = 'Все',
  DONE = 'Выполненные',
  NOT_DONE = 'Невыполненные'
}

export type FILTER_TYPE = FILTER_TYPES.ALL | FILTER_TYPES.DONE | FILTER_TYPES.NOT_DONE;

export type State = {
  list: GoalType[];
  filtered: FILTER_TYPE;
  searchBar: string;
};

const initialState: State = {
  list: [],
  filtered: FILTER_TYPES.ALL,
  searchBar: ''
};

export enum ACTION_TYPES {
  ADD = 'add',
  REMOVE = 'remove',
  COMPLETE = 'complete',
  FILTER = 'filter',
  SEARCH = 'search'
}

const store = createStore(reducer);
export { reducer, initialState };
export default store;
