import React from 'react';
import { screen } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import MyGoal from './Goal';

test('Отображает имя цели', () => {
  const testState = {
    list: []
  };
  const testGoal = {
    id: '1',
    name: 'Стать президентом',
    date: '01/01/2001',
    isDone: false
  };
  const store = makeTestStore({ testState });
  testRender(
    <MyGoal id={testGoal.id} name={testGoal.name} date={testGoal.date} isDone={testGoal.isDone} />,
    { store }
  );
  const nameElement = screen.getByTestId('goal-name');
  const dateElement = screen.getByTestId('goal-date');
  expect(nameElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent(testGoal.name);
  expect(dateElement).toHaveTextContent(testGoal.date);
});
