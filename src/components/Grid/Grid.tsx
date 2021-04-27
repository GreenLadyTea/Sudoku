import React from 'react';
import { GridType } from '../../store';
import Cell from '../Cell/Cell';
import './Grid.css';
import { useSelector } from 'react-redux';

export default function Grid() {
  const matrix = useSelector((state: GridType) => state);
  return (
    <>
      <div className="grid-container" data-testid="grid">
        {matrix.map(row =>
          row.map(cell => (
            <Cell
              key={cell.id}
              id={cell.id}
              value={cell.value}
              isChangeable={cell.isChangeable}
              isChecked={cell.isChecked}
            />
          ))
        )}
      </div>
    </>
  );
}
