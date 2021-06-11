import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import puzzles from './puzzles.json';
import Menu from './components/Menu/Menu';

export default class App extends Component {
  makeGrid() {
    const ROWS = 9;
    const COLUMNS = 9;
    let matrix = [];
    let index = 0;
    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      matrix[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
        const value = puzzles.firstPuzzle.game[rowIndex][columnIndex];
        matrix[rowIndex][columnIndex] = {
          id: index++,
          value: value
        };
      }
    }
    return matrix;
  }

  handleClickCell(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Судоку</h1>
        <Grid matrix={this.makeGrid()} handleClickCell={this.handleClickCell()} />
        <Menu />
      </div>
    );
  }
}
