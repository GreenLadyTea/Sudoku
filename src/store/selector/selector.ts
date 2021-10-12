import { FILTER_TYPES, State } from '../store';

export function selectByFilter(state: State): State {
  if (state.filtered === FILTER_TYPES.DONE) {
    return {
      ...state,
      list: [...state.list.filter(element => element.isCompleted)]
    };
  }
  if (state.filtered === FILTER_TYPES.NOT_DONE) {
    return {
      ...state,
      list: [...state.list.filter(element => !element.isCompleted)]
    };
  }
  return state;
}
