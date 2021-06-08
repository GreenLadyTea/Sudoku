import React from 'react';
import { State } from '../../store/store';
import Cell from '../Cell/Cell';
import './Grid.css';
import { useSelector } from 'react-redux';

export default function Grid() {
  const matrix = useSelector((state: State) => state.grid);
  return (
    <>
      <div className="grid-container" data-testid="grid">
        {matrix.map((row, rowIndex) => (
          <div className="grid-row" key={rowIndex}>
            {row.map(cell => (
              <Cell
                key={cell.id}
                id={cell.id}
                value={cell.value}
                state={cell.state}
                digitsArray={cell.digitsArray}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
