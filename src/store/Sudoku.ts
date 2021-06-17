import { COLUMNS, getRandomIntInclusive, PUZZLES, ROWS } from './store';

export class Sudoku {
  puzzleName: string;
  gridForGame: number[][];
  readyGrid: number[][];

  constructor(puzzleName: string) {
    this.puzzleName = puzzleName;
    this.gridForGame = PUZZLES[puzzleName].game;
    this.readyGrid = PUZZLES[puzzleName].solution;
  }

  transpose() {
    const grid = this.readyGrid;
    const grid2 = this.gridForGame;
    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
        this.readyGrid[rowIndex][columnIndex] = grid[columnIndex][rowIndex];
        this.gridForGame[rowIndex][columnIndex] = grid2[columnIndex][rowIndex];
      }
    }
  }

  swapRows() {
    const string = getRandomIntInclusive(0, 8);
    let stringForSwap = 0;
    const grid = this.readyGrid;
    const grid2 = this.gridForGame;

    if (string === 0 || string === 1 || string === 2) {
      do {
        stringForSwap = getRandomIntInclusive(0, 2);
      } while (string === stringForSwap);
    } else if (string === 3 || string === 4 || string === 5) {
      do {
        stringForSwap = getRandomIntInclusive(3, 5);
      } while (string === stringForSwap);
    } else {
      do {
        stringForSwap = getRandomIntInclusive(6, 8);
      } while (string === stringForSwap);
    }

    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      this.readyGrid[string][columnIndex] = grid[stringForSwap][columnIndex];
      this.readyGrid[stringForSwap][columnIndex] = grid[string][columnIndex];

      this.gridForGame[string][columnIndex] = grid2[stringForSwap][columnIndex];
      this.gridForGame[stringForSwap][columnIndex] = grid2[string][columnIndex];
    }
  }

  swapColumns() {
    const column = getRandomIntInclusive(0, 8);
    let columnForSwap = 0;
    const grid = this.readyGrid;
    const grid2 = this.gridForGame;

    if (column === 0 || column === 1 || column === 2) {
      do {
        columnForSwap = getRandomIntInclusive(0, 2);
      } while (column === columnForSwap);
    } else if (column === 3 || column === 4 || column === 5) {
      do {
        columnForSwap = getRandomIntInclusive(3, 5);
      } while (column === columnForSwap);
    } else {
      do {
        columnForSwap = getRandomIntInclusive(6, 8);
      } while (column === columnForSwap);
    }

    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      this.readyGrid[rowIndex][column] = grid[rowIndex][columnForSwap];
      this.readyGrid[rowIndex][columnForSwap] = grid[rowIndex][column];

      this.gridForGame[rowIndex][column] = grid2[rowIndex][columnForSwap];
      this.gridForGame[rowIndex][columnForSwap] = grid2[rowIndex][column];
    }
  }

  swapRowsAreas() {
    const rowsArea = getRandomIntInclusive(0, 2);
    let rowsAreaForSwap = 0;

    let row1: number;
    let row2: number;
    let row3: number;

    let rowForSwap1: number;
    let rowForSwap2: number;
    let rowForSwap3: number;

    const grid = this.readyGrid;
    const grid2 = this.gridForGame;

    if (rowsArea === 0) {
      row1 = 0;
      row2 = 1;
      row3 = 2;
    } else if (rowsArea === 1) {
      row1 = 3;
      row2 = 4;
      row3 = 5;
    } else {
      row1 = 6;
      row2 = 7;
      row3 = 8;
    }

    do {
      rowsAreaForSwap = getRandomIntInclusive(0, 2);
    } while (rowsArea === rowsAreaForSwap);

    if (rowsAreaForSwap === 0) {
      rowForSwap1 = 0;
      rowForSwap2 = 1;
      rowForSwap3 = 2;
    } else if (rowsAreaForSwap === 1) {
      rowForSwap1 = 3;
      rowForSwap2 = 4;
      rowForSwap3 = 5;
    } else {
      rowForSwap1 = 6;
      rowForSwap2 = 7;
      rowForSwap3 = 8;
    }

    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      this.readyGrid[row1][columnIndex] = grid[rowForSwap1][columnIndex];
      this.readyGrid[row2][columnIndex] = grid[rowForSwap2][columnIndex];
      this.readyGrid[row3][columnIndex] = grid[rowForSwap3][columnIndex];

      this.readyGrid[rowForSwap1][columnIndex] = grid[row1][columnIndex];
      this.readyGrid[rowForSwap2][columnIndex] = grid[row2][columnIndex];
      this.readyGrid[rowForSwap3][columnIndex] = grid[row3][columnIndex];

      this.gridForGame[row1][columnIndex] = grid2[rowForSwap1][columnIndex];
      this.gridForGame[row2][columnIndex] = grid2[rowForSwap2][columnIndex];
      this.gridForGame[row3][columnIndex] = grid2[rowForSwap3][columnIndex];

      this.gridForGame[rowForSwap1][columnIndex] = grid2[row1][columnIndex];
      this.gridForGame[rowForSwap2][columnIndex] = grid2[row2][columnIndex];
      this.gridForGame[rowForSwap3][columnIndex] = grid2[row3][columnIndex];
    }
  }

  swapColumnsAreas() {
    const colsArea = getRandomIntInclusive(0, 2);
    let colsAreaForSwap = 0;

    let col1 = 0;
    let col2 = 0;
    let col3 = 0;

    let colForSwap1 = 0;
    let colForSwap2 = 0;
    let colForSwap3 = 0;

    const grid = this.readyGrid;
    const grid2 = this.gridForGame;

    if (colsArea === 0) {
      col1 = 0;
      col2 = 1;
      col3 = 2;
    } else if (colsArea === 1) {
      col1 = 3;
      col2 = 4;
      col3 = 5;
    } else {
      col1 = 6;
      col2 = 7;
      col3 = 8;
    }

    do {
      colsAreaForSwap = getRandomIntInclusive(0, 2);
    } while (colsArea === colsAreaForSwap);

    if (colsAreaForSwap === 0) {
      colForSwap1 = 0;
      colForSwap2 = 1;
      colForSwap3 = 2;
    } else if (colsAreaForSwap === 1) {
      colForSwap1 = 3;
      colForSwap2 = 4;
      colForSwap3 = 5;
    } else {
      colForSwap1 = 6;
      colForSwap2 = 7;
      colForSwap3 = 8;
    }

    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      this.readyGrid[rowIndex][col1] = grid[rowIndex][colForSwap1];
      this.readyGrid[rowIndex][col2] = grid[rowIndex][colForSwap2];
      this.readyGrid[rowIndex][col3] = grid[rowIndex][colForSwap3];

      this.readyGrid[rowIndex][colForSwap1] = grid[rowIndex][col1];
      this.readyGrid[rowIndex][colForSwap2] = grid[rowIndex][col2];
      this.readyGrid[rowIndex][colForSwap3] = grid[rowIndex][col3];

      this.readyGrid[rowIndex][col1] = grid2[rowIndex][colForSwap1];
      this.readyGrid[rowIndex][col2] = grid[rowIndex][colForSwap2];
      this.readyGrid[rowIndex][col3] = grid[rowIndex][colForSwap3];

      this.readyGrid[rowIndex][colForSwap1] = grid2[rowIndex][col1];
      this.readyGrid[rowIndex][colForSwap2] = grid2[rowIndex][col2];
      this.readyGrid[rowIndex][colForSwap3] = grid2[rowIndex][col3];
    }
  }

  mix(amountOfSwaps: number) {
    for (let i = 0; i < amountOfSwaps; i++) {
      const swapSeed = getRandomIntInclusive(1, 5);
      switch (swapSeed) {
        case 1:
          this.swapColumns();
          break;
        case 2:
          this.swapRows();
          break;
        case 3:
          this.swapColumnsAreas();
          break;
        case 4:
          this.swapRowsAreas();
          break;
        case 5:
          this.transpose();
          break;
      }
    }
  }
}
