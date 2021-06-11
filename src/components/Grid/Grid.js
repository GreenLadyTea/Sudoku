import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Grid.css';

export default class Grid extends Component {
  render() {
    const { matrix } = this.props;
    return (
      <>
        <div className="grid">
          {matrix.map((row, rowIndex) => (
            <div className="grid-row" key={rowIndex}>
              {row.map(cell => (
                <Cell key={cell.id} id={cell.id} value={cell.value} />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}
