import { createStore } from 'redux';

export type Goal = {
  id: string;
  name: string;
  date: string;
  isDone: boolean;
};

export type State = {
  list: Goal[];
};

const initialState: State = {
  list: []
};

export enum ACTION_TYPES {
  ADD = 'add',
  REMOVE = 'remove',
  CHECK = 'check'
}

export interface ActionAddGoal {
  type: ACTION_TYPES.ADD;
  payload: Goal;
}

export interface ActionDeleteGoal {
  type: ACTION_TYPES.REMOVE;
  payload: string;
}

export interface ActionCheckGoal {
  type: ACTION_TYPES.CHECK;
  payload: boolean;
}

export type Action = ActionAddGoal | ActionDeleteGoal;

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return { ...state, list: [...state.list, action.payload] };
    case ACTION_TYPES.REMOVE: {
      return {
        ...state,
        list: [...state.list.filter(Item => Item.id !== action.payload)]
      };
    }
  }
  return state;
}

export const add = (content: Goal) => ({
  type: ACTION_TYPES.ADD,
  payload: content
});

export const remove = (content: string) => ({
  type: ACTION_TYPES.REMOVE,
  payload: content
});

export const check = (content: string) => ({
  type: ACTION_TYPES.REMOVE,
  payload: content
});

const store = createStore(reducer);
export type AppDispatch = typeof store.dispatch;
export default store;
