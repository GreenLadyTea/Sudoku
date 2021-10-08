import React from 'react';
import { GoalType } from '../../store/store';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/actions/actions';

export default function Goal(goal: GoalType) {
  const dispatch = useDispatch();
  return (
    <>
      <input type="checkbox" checked={goal.isCompleted} />
      <div data-testid="goal-name">{goal.name}</div>
      <div data-testid="goal-date">{goal.date}</div>
      <button data-testid="delete-button" onClick={() => dispatch(remove(goal.id))}>
        Удалить
      </button>
    </>
  );
}
