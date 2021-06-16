import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/store';
import './ErrorCounter.css';

export default function ErrorCounter() {
  const counter = useSelector((state: State) => state.errorCounter);
  return (
    <span className="counter" data-testid="error-counter">
      Ошибки: {counter}
    </span>
  );
}
