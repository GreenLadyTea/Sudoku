import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredList } from '../../store/selector/selector';
import Goal from '../Goal/Goal';

export default function GoalsList() {
  const goals = useSelector(selectFilteredList);

  function renderList() {
    if (!goals.list.length) {
      return 'Целей нет! Срочно поставьте!';
    }
    return (
      <>
        {goals.list.map(item => (
          <Goal
            key={item.id}
            id={item.id}
            name={item.name}
            date={item.date}
            isCompleted={item.isCompleted}
          />
        ))}
      </>
    );
  }

  return <div data-testid="list">{renderList()}</div>;
}
