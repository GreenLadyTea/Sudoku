import { createStore } from 'redux';
import { reducer } from './reducer/reducer';

export type GoalType = {
  id: string;
  name: string;
  date: string;
  isCompleted: boolean;
};

export type State = {
  list: GoalType[];
};

const initialState: State = {
  list: []
};

export enum ACTION_TYPES {
  ADD = 'add',
  REMOVE = 'remove',
  COMPLETE = 'complete'
}

const store = createStore(reducer);
export { reducer, initialState };
export default store;
