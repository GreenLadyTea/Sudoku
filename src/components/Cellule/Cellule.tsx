import React from 'react';

type CelluleProps = {
  digit: number;
  array: number[];
};

export default function Cellule({ digit, array }: CelluleProps) {
  return (
    <>
      <div className="mini-grid-cell" key={digit}>
        {array.includes(digit) ? digit : <>&nbsp;</>}
      </div>
    </>
  );
}
