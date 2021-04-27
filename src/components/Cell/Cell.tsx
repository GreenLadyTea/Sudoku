import React from 'react';
import { CellType, chooseCell } from '../../store';
import './Cell.css';
import { useDispatch } from 'react-redux';

export default function Cell(cell: CellType) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={cell.value === 0 ? 'empty-cell' : 'cell'}
        data-testid="cell"
        onClick={() => dispatch(chooseCell(cell.id))}
      >
        {cell.value}
      </div>
    </>
  );
}
