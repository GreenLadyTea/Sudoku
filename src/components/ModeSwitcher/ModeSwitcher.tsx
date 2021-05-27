import React from 'react';
import './ModeSwitcher.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../../store/actions/actions';
import { MODE_TYPES, State } from '../../store/store';

export function switchMode(currentMode: MODE_TYPES): MODE_TYPES {
  if (currentMode === MODE_TYPES.PEN) {
    return MODE_TYPES.PENCIL;
  } else {
    return MODE_TYPES.PEN;
  }
}

export default function ModeSwitcher() {
  const currentMode = useSelector((state: State) => state.mode);
  const dispatch = useDispatch();
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          data-testid="switcher"
          onChange={() => dispatch(changeMode(switchMode(currentMode)))}
        />
        <span className="slider" />
      </label>
    </>
  );
}
