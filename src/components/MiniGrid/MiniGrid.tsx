import { CELL_DIGITS } from '../../store/store';
import Cellule from '../Cellule/Cellule';
import './MiniGrid.css';
import React from 'react';

type MiniGridProps = {
  array: number[];
};

export default function MiniGrid({ array }: MiniGridProps) {
  return (
    <>
      <div className="mini-grid" data-testid="mini-grid">
        {CELL_DIGITS.map((row, rowIndex) => (
          <div className="mini-grid-row" key={rowIndex}>
            {row.map(digit => (
              <Cellule digit={digit} array={array} key={digit} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
