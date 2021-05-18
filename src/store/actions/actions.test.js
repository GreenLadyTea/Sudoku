import { ACTION_TYPES } from '../store';
import { assignDigit, selectCell } from './actions';

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
