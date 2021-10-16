import React from 'react';
import { GoalType } from '../../store/store';
import { useDispatch } from 'react-redux';
import { complete, remove } from '../../store/actions/actions';

export default function Goal(goal: GoalType) {
  const dispatch = useDispatch();
  const tLetter = 'T';
  return (
    <>
      <div>
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={goal.isCompleted}
          onChange={() => dispatch(complete(goal.id))}
        />
        <span data-testid="goal-name">{goal.name}</span>
        <span data-testid="goal-date"> {goal.date.replace(tLetter, ' ')}</span>{' '}
        <button data-testid="delete-button" onClick={() => dispatch(remove(goal.id))}>
          Удалить
        </button>
      </div>
    </>
  );
}
