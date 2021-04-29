import React from 'react';
import { CellType, selectCell } from '../../store';
import './Cell.css';
import { useDispatch } from 'react-redux';

export default function Cell(cell: CellType) {
  enum cellStyles {
    EMPTY = 'empty-cell',
    UNCHANGEABLE = 'unchangeable-cell',
    SELECTED = 'selected-cell',
    SELECTED_EMPTY = 'selected-empty-cell',
    CHANGEABLE = 'changeable-cell'
  }

  function stylizeCell() {
    if (cell.value === 0 && !cell.isChecked) {
      return cellStyles.EMPTY;
    } else if (cell.value === 0 && cell.isChecked) {
      return cellStyles.SELECTED_EMPTY;
    } else if (cell.isChecked && cell.isChangeable) {
      return cellStyles.SELECTED;
    } else if (cell.isChangeable) {
      return cellStyles.CHANGEABLE;
    } else {
      return cellStyles.UNCHANGEABLE;
    }
  }

  const dispatch = useDispatch();
  return (
    <>
      <div
        className={stylizeCell()}
        data-testid="cell"
        onClick={() => dispatch(selectCell(cell.id))}
      >
        {cell.value}
      </div>
    </>
  );
}
