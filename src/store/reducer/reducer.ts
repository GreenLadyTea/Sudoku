import { ACTION_TYPES, initialState, State } from '../store';
import { Action } from '../actions/actions';

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newElement = {
        id: Math.random().toString(36).substr(2),
        name: action.payload.name,
        date: action.payload.date,
        isCompleted: false
      };
      return { ...state, list: [...state.list, newElement] };
    }
    case ACTION_TYPES.REMOVE: {
      return {
        ...state,
        list: [...state.list.filter(Item => Item.id !== action.payload)]
      };
    }
    case ACTION_TYPES.COMPLETE: {
      let goalsList = [...state.list];
      for (let i = 0; i < goalsList.length; i++) {
        if (goalsList[i].id === action.payload) {
          goalsList[i].isCompleted = !goalsList[i].isCompleted;
        }
      }
      return { ...state, list: [...goalsList] };
    }
    case ACTION_TYPES.FILTER: {
      return {
        ...state,
        filtered: action.payload
      };
    }
    case ACTION_TYPES.SEARCH: {
      return {
        ...state,
        searchBar: action.payload
      };
    }
  }
  return state;
}
