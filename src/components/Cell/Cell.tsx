import React from 'react';
import { CELL_DIGITS, CellType, MODE_TYPES, State } from '../../store/store';
import './Cell.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCell } from '../../store/actions/actions';

export default function Cell(cell: CellType) {
  const dispatch = useDispatch();
  const mode = useSelector((state: State) => state.mode);
  return (
    <>
      <div
        className={'grid-cell ' + cell.state}
        data-testid="cell"
        onClick={() => dispatch(selectCell(cell.id))}
      >
        {cell.value !== 0 && <span className="assigned-cell">{cell.value}</span>}
        {cell.value === 0 && (
          <span>
            {mode === MODE_TYPES.PEN && <span className="assigned-cell">{''}</span>}
            {mode === MODE_TYPES.PENCIL && (
              <div className="mini-grid" data-testid="mini-grid">
                {CELL_DIGITS.map((row, rowIndex) => (
                  <div className="mini-grid-row" key={rowIndex}>
                    {row.map(digit => (
                      <div className="mini-grid-cell" key={digit}>
                        {digit}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </span>
        )}
      </div>
    </>
  );
}
