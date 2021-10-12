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

export function selectBySearch(state: State): State {
  if (state.searchBar !== '') {
    return {
      ...state,
      list: [
        ...state.list.filter(
          element => element.name.toUpperCase().indexOf(state.searchBar.toUpperCase()) !== -1
        )
      ]
    };
  }
  return state;
}

export function selectFilteredList(state: State): State {
  return selectBySearch(selectByFilter(state));
}
