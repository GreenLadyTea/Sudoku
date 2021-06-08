import React from 'react';
import { CellType } from '../../store/store';
import './Cell.css';
import { useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/actions';
import MiniGrid from '../MiniGrid/MiniGrid';

export default function Cell(cell: CellType) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={'grid-cell ' + cell.state}
        data-testid="cell"
        onClick={() => dispatch(selectCell(cell.id))}
      >
        {cell.value !== 0 && <span className="pen-written-cell">{cell.value}</span>}
        {cell.value === 0 && <MiniGrid array={cell.digitsArray} />}
      </div>
    </>
  );
}
