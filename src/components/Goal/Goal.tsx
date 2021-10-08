import React from 'react';
import { GoalType } from '../../store/store';
import { useDispatch } from 'react-redux';
import { complete, remove } from '../../store/actions/actions';

export default function Goal(goal: GoalType) {
  const dispatch = useDispatch();
  return (
    <>
      <input
        data-testid="checkbox"
        type="checkbox"
        checked={goal.isCompleted}
        onChange={() => dispatch(complete(goal.id))}
      />
      <div data-testid="goal-name">{goal.name}</div>
      <div data-testid="goal-date">{goal.date}</div>
      <button data-testid="delete-button" onClick={() => dispatch(remove(goal.id))}>
        Удалить
      </button>
    </>
  );
}
