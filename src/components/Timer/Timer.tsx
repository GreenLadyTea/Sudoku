import React, { useEffect, useState } from 'react';
import './Timer.css';
import { useSelector } from 'react-redux';
import { ENDGAME_TYPES, State } from '../../store/store';

export default function Timer() {
  const [time, setTime] = useState(0);
  const gameOver = useSelector((state: State) => state.gameIsOver);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevState => {
        if (gameOver === ENDGAME_TYPES.GAME_IS_NOT_OVER) {
          return prevState + 1;
        } else {
          return prevState;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className="timer">
      {Math.floor(time / 60) === 0 ? '' : Math.floor(time / 60) + ' мин'} {time % 60} сек
    </span>
  );
}
