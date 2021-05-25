import React from 'react';
import { CellType } from '../../store/store';
import './Cell.css';
import { useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/actions';

export default function Cell(cell: CellType) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={cell.state} data-testid="cell" onClick={() => dispatch(selectCell(cell.id))}>
        {cell.value !== 0 ? cell.value : ''}
      </div>
    </>
  );
}
