import { Action } from '../actions/actions';
import { ACTION_TYPES, initialState, State } from '../store';
import { selectCellMutator } from '../mutators/selectCellMutator';
import { assignDigitMutator } from '../mutators/assignDigitMutator';

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ACTION_TYPES.SELECT_CELL: {
      return { ...state, grid: selectCellMutator(state.grid, action.payload) };
    }
    case ACTION_TYPES.ASSIGN_DIGIT: {
      return assignDigitMutator(state, action.payload);
    }
    case ACTION_TYPES.CHANGE_MODE: {
      return { ...state, mode: action.payload };
    }
    default:
      return state;
  }
}
