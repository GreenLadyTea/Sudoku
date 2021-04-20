import React from 'react';
import { CellType } from '../../store';

export default function Cell(cell: CellType) {
  return (
    <>
      <div className="cell" data-testid="cell">
        {cell.value}
      </div>
    </>
  );
}
