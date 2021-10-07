import React from 'react';
import { Goal, remove } from '../../store/store';
import { useDispatch } from 'react-redux';

export default function MyGoal(goal: Goal) {
  const dispatch = useDispatch();
  return (
    <>
      <div data-testid="goal-name">{goal.name}</div>
      <div data-testid="goal-date">{goal.date}</div>
      <button data-testid="delete-button" onClick={() => dispatch(remove(goal.id))}>
        Удалить
      </button>
    </>
  );
}
