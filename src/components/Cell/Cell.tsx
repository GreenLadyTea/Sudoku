import React from 'react';
import { CellType, selectCell } from '../../store';
import './Cell.css';
import { useDispatch } from 'react-redux';

export enum cellStyles {
  EMPTY = 'empty-cell',
  UNCHANGEABLE = 'unchangeable-cell',
  SELECTED = 'selected-cell',
  SELECTED_EMPTY = 'selected-empty-cell',
  CHANGEABLE = 'changeable-cell'
}

export function stylizeCell(cell: CellType) {
  if (cell.value === '' && !cell.isChecked) {
    return cellStyles.EMPTY;
  } else if (cell.value === '' && cell.isChecked) {
    return cellStyles.SELECTED_EMPTY;
  } else if (cell.isChecked && cell.isChangeable) {
    return cellStyles.SELECTED;
  } else if (cell.isChangeable) {
    return cellStyles.CHANGEABLE;
  } else {
    return cellStyles.UNCHANGEABLE;
  }
}

export default function Cell(cell: CellType) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={stylizeCell(cell)}
        data-testid="cell"
        onClick={() => dispatch(selectCell(cell.id))}
      >
        {cell.value ? cell.value : ''}
      </div>
    </>
  );
}
