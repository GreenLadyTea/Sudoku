import { ACTION_TYPES, MODE_TYPES } from '../store';
import { assignDigit, changeMode, selectCell } from './actions';

test('1 Создатель экшна selectCell создает новый экшн типа CHOOSE_CELL и с payload равным тому, что ему было передано в параметре', () => {
  const content = 10;
  const expectedAction = {
    type: ACTION_TYPES.SELECT_CELL,
    payload: content
  };
  expect(selectCell(content)).toEqual(expectedAction);
});

test('2 Создатель экшна assignDigit создает новый экшн типа ASSIGN_DIGIT и с payload равным тому, что ему было передано в параметре', () => {
  const content = 7;
  const expectedAction = {
    type: ACTION_TYPES.ASSIGN_DIGIT,
    payload: content
  };
  expect(assignDigit(content)).toEqual(expectedAction);
});

test('3 Создатель экшна changeMode создает новый экшн типа CHANGE_MODE и с payload равным тому, что ему было передано в параметре', () => {
  const content = MODE_TYPES.PEN;
  const expectedAction = {
    type: ACTION_TYPES.CHANGE_MODE,
    payload: content
  };
  expect(changeMode(content)).toEqual(expectedAction);
});
