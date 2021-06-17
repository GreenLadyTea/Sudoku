import React, { useEffect, useState } from 'react';
import './Timer.css';

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevState => prevState + 1);
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
