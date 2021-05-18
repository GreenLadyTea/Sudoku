import { selector } from './selector';
import { makeGrid } from '../gridCreator/gridCreator';
import { ENDGAME_TYPES } from '../store';

const grid = makeGrid();

test('Селектор возвращает GAME_IS_NOT_OVER, если счетчик только 3 ошибки', () => {
const result = selector(grid, 3);
  expect(result).toEqual(ENDGAME_TYPES.GAME_IS_NOT_OVER);
});

test('Селектор возвращает FAIL, если счетчик достиг 5 ошибок', () => {
  const result = selector(grid, 5);
  expect(result).toEqual(ENDGAME_TYPES.FAIL);
});
