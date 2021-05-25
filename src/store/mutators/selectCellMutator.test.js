import { changeCell, selectCellMutator } from './selectCellMutator';
import { CELL_STATE_TYPES } from '../store';
import { makeGrid } from '../gridCreator/gridCreator';

const id = 1;

test('Функция changeCell возвращает клетку с полем state равным SELECTED_EMPTY, если было EMPTY', () => {
  const cell = {
    id: 1,
    value: 0,
    state: CELL_STATE_TYPES.EMPTY
  };
  const result = changeCell(cell, id);
  expect(result.state).toEqual(CELL_STATE_TYPES.SELECTED_EMPTY);
});

test('Функция changeCell возвращает клетку с полем state SELECTED_CORRUPTED, если было CORRUPTED', () => {
  const cell = {
    id: 1,
    value: 6,
    state: CELL_STATE_TYPES.CORRUPTED
  };
  const result = changeCell(cell, id);
  expect(result.state).toEqual(CELL_STATE_TYPES.SELECTED_CORRUPTED);
});

test('Функция changeCell возвращает клетку с полем state CORRUPTED, если было SELECTED_CORRUPTED', () => {
  const cell = {
    id: 1,
    value: 6,
    state: CELL_STATE_TYPES.SELECTED_CORRUPTED
  };
  const result = changeCell(cell, id);
  expect(result.state).toEqual(CELL_STATE_TYPES.CORRUPTED);
});

test('Функция changeCell возвращает клетку с полем state EMPTY, если было SELECTED_EMPTY', () => {
  const cell = {
    id: 1,
    value: 0,
    state: CELL_STATE_TYPES.SELECTED_EMPTY
  };
  const result = changeCell(cell, id);
  expect(result.state).toEqual(CELL_STATE_TYPES.EMPTY);
});

test('Функция changeCell возвращает клетку с полем state ASSIGNED, если и было ASSIGNED', () => {
  const cell = {
    id: 1,
    value: 4,
    state: CELL_STATE_TYPES.ASSIGNED
  };
  const result = changeCell(cell, id);
  expect(result.state).toEqual(CELL_STATE_TYPES.ASSIGNED);
});

test('Функция selectCellMutator возвращает grid в которой заданная по id пустая клетка стала иметь state SELECTED_EMPTY', () => {
  const grid = makeGrid();
  const result = selectCellMutator(grid, id);
  expect(result[0][1].state).toEqual(CELL_STATE_TYPES.SELECTED_EMPTY);
});
