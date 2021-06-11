import React, { Component } from 'react';
import '../Grid/Grid.css';

export default class Cell extends Component {
  render() {
    const { value, id, handleClick } = this.props;
    return (
      <>
        <div className="grid-cell" onClick={() => handleClick(id)} data-testid="cell">
          {value !== 0 ? value : ''}
        </div>
      </>
    );
  }
}
