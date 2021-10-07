import { createStore } from 'redux';

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

export interface ActionAddGoal {
  type: ACTION_TYPES.ADD;
  payload: GoalType;
}

export interface ActionDeleteGoal {
  type: ACTION_TYPES.REMOVE;
  payload: string;
}

export interface ActionCompleteGoal {
  type: ACTION_TYPES.COMPLETE;
  payload: boolean;
}

export type Action = ActionAddGoal | ActionDeleteGoal | ActionCompleteGoal;

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

export const add = (content: GoalType) => ({
  type: ACTION_TYPES.ADD,
  payload: content
});

export const remove = (content: string) => ({
  type: ACTION_TYPES.REMOVE,
  payload: content
});

export const complete = (content: boolean) => ({
  type: ACTION_TYPES.COMPLETE,
  payload: content
});

const store = createStore(reducer);
export type AppDispatch = typeof store.dispatch;
export default store;
