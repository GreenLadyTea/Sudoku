import React from 'react';
import { CellType } from '../../store/store';
import './Cell.css';
import { useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions';

export enum cellStyles {
  CORRUPTED = 'corrupted-cell',
  SELECTED = 'selected-cell',
  EMPTY = 'empty-cell',
  SELECTED_EMPTY = 'selected-empty-cell',
  NOT_PREDETERMINED = 'not-predetermined-cell'
}

export function stylizeCell(cell: CellType) {
  if (cell.isError) {
    return cellStyles.CORRUPTED;
  } else if (cell.value === 0 && cell.isChecked) {
    return cellStyles.SELECTED_EMPTY;
  } else if (cell.value === 0) {
    return cellStyles.EMPTY;
  } else if (cell.isChecked && !cell.isPredetermined && cell.isChangeable) {
    return cellStyles.SELECTED;
  } else if (!cell.isPredetermined) {
    return cellStyles.NOT_PREDETERMINED;
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
        {cell.value !== 0 ? cell.value : ''}
      </div>
    </>
  );
}
